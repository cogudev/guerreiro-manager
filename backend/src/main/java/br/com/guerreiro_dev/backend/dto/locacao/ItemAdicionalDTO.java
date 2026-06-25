package br.com.guerreiro_dev.backend.dto.locacao;

import java.math.BigDecimal;

public record ItemAdicionalDTO (
        String nome,
        String descricao,
        BigDecimal preco
)

{
}
