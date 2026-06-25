package br.com.guerreiro_dev.backend.dto.NotaFiscalEmitida;

import br.com.guerreiro_dev.backend.dto.locacao.LocacaoResponseDTO;

import java.time.LocalDate;
import java.util.UUID;

public record NotaFiscalEmitidaResponseDTO(

        UUID id,
        Long numeroNota,
        LocalDate dataEmissao,
        LocacaoResponseDTO locacao

) {}