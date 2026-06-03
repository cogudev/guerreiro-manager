{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      pkgs = import nixpkgs { system = "x86_64-linux"; }; # Mantenha o seu sistema aqui
    in {
      devShells."x86_64-linux".default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
          pkgs.corepack
        ];
      };
    };
}