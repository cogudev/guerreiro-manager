package br.com.guerreiro_dev.backend.dto.cliente;

public record ClienteCreateDTO(
        String nome,
        String cpf,
        String telefone,
        String email,
        String endereco
) {
}
