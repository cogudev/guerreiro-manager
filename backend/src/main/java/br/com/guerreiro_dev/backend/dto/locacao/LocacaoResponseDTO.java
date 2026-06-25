package br.com.guerreiro_dev.backend.dto.locacao;

import br.com.guerreiro_dev.backend.domain.enums.StatusLocacao;
import br.com.guerreiro_dev.backend.dto.cliente.ClienteResponseDTO;
import br.com.guerreiro_dev.backend.dto.veiculo.VeiculoResponseDTO;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record LocacaoResponseDTO(
        UUID id,
        ClienteResponseDTO cliente,
        VeiculoResponseDTO veiculo,
        BigDecimal valorVeiculo,
        BigDecimal valorTotal,
        LocalDate dataRetirada,
        LocalDate dataEntrega,
        StatusLocacao status,
        List<ItemAdicionalDTO> adicionais
) {}
