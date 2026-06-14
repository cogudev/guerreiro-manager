package br.com.guerreiro_dev.backend.domain.enums;
import lombok.Getter;

@Getter
public enum StatusLocacao {

    RESERVADO(1),
    EM_ANDAMENTO(2),
    CONCLUIDO(3),
    CANCELADO(4);

    private final int code;

    StatusLocacao(int code) {
        this.code = code;
    }

    public static StatusLocacao valueOf(int code) {

        for(StatusLocacao value : StatusLocacao.values()) {
            if(value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Invalid StatusLocacao code");


    }
}
