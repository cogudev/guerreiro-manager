{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        pg-start = pkgs.writeShellScriptBin "pg-start" ''
          mkdir -p infra/postgres/socket
          pg_ctl -D infra/postgres/data -o "-k $PWD/infra/postgres/socket" start
        '';

        pg-stop = pkgs.writeShellScriptBin "pg-stop" ''
          pg_ctl -D infra/postgres/data stop
        '';

        pg-status = pkgs.writeShellScriptBin "pg-status" ''
          pg_isready -h "$PWD/infra/postgres/socket" -d guerreiro_db
        '';
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
            pkgs.corepack
            pkgs.jdk21
            pkgs.maven
            pkgs.postgresql

            pg-start
            pg-stop
            pg-status
          ];

          shellHook = ''
            export JAVA_HOME=${pkgs.jdk21}
            export PGHOST=$PWD/infra/postgres/socket

            echo "Ambiente Guerreiro Manager carregado!"
            echo "Node: $(node --version)"
            echo "Java: $(java --version | head -n 1)"
            echo "Maven: $(mvn --version | head -n 1)"
            echo "PostgreSQL: $(psql --version)"
          '';
        };
      }
    );
}