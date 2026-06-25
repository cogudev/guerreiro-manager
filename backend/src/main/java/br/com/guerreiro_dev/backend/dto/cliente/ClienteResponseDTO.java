package br.com.guerreiro_dev.backend.dto.cliente;

import java.util.UUID;

public record ClienteResponseDTO(
        UUID id,
        String nome,
        String cpf,
        String telefone,
        String email,
        String endereco
) {}