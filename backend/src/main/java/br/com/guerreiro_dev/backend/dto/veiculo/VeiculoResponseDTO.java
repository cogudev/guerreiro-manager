package br.com.guerreiro_dev.backend.dto.veiculo;

import br.com.guerreiro_dev.backend.domain.enums.StatusVeiculo;

import java.util.UUID;

public record VeiculoResponseDTO(

        UUID id,
        String placa,
        String chassi,
        String modelo,
        String anoFabricacao,
        String horimetroAtual,
        String kmAtual,
        StatusVeiculo status
)
{}
