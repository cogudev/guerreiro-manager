package br.com.guerreiro_dev.backend.dto.locacao;

import br.com.guerreiro_dev.backend.domain.enums.StatusLocacao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record LocacaoCreateDTO(
        UUID clienteId,
        UUID veiculoId,
        BigDecimal valorVeiculo,
        LocalDate dataRetirada,
        LocalDate dataEntrega,
        StatusLocacao status,
        List<ItemAdicionalDTO> adicionais
) {}