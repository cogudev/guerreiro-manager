package br.com.guerreiro_dev.backend.dto.veiculo;

import br.com.guerreiro_dev.backend.domain.enums.StatusVeiculo;

public record VeiculoCreateDTO(
        String placa,
        String chassi,
        String modelo,
        String anoFabricacao,
        String horimetroAtual,
        String kmAtual,
        StatusVeiculo status
) {}

