package br.com.guerreiro_dev.backend.infrastructure;

public final class CoordenadasNotaFiscal {

    private CoordenadasNotaFiscal() {
    }

    public static final Posicao DATA_EMISSAO = new Posicao(360, 690);
    public static final Posicao DATA_RECEBIMENTO = new Posicao(480, 175);

    public static final Posicao NUMERO_NOTA_TOPO = new Posicao(45, 595);
    public static final Posicao NUMERO_NOTA_MEIO = new Posicao(270, 595);
    public static final Posicao NUMERO_NOTA_RODAPE = new Posicao(480, 140);

    public static final Posicao VALOR_VEICULO = new Posicao(390, 524);
    public static final Posicao VALOR_ADICIONAL = new Posicao(390, 514);
    public static final Posicao VALOR_TOTAL = new Posicao(390, 211);

    public static final Posicao DESCRICAO_VEICULO = new Posicao(35, 524);
    public static final Posicao DESCRICAO_ADICIONAL = new Posicao(35, 514);

    public static final Posicao NOME_CLIENTE = new Posicao(35, 201);
    public static final Posicao CPF_CLIENTE = new Posicao(35, 191);
    public record Posicao(float x, float y) {
    }

}
