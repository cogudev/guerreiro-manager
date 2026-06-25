package br.com.guerreiro_dev.backend.dto.NotaFiscalEmitida;

import java.time.LocalDate;

public record NotaFiscalEmitidaCreateDTO(
    LocalDate dataEmissao
)
{}
