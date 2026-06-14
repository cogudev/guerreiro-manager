package br.com.guerreiro_dev.backend.domain.enums;
import lombok.Getter;

@Getter
public enum StatusVeiculo {

    DISPONIVEL(1),
    ALUGADO(2),
    MANUTENCAO(3);

    private final int code;

    StatusVeiculo(int code) {
        this.code = code;
    }



    public static StatusVeiculo valueOf(int code) {

        for(StatusVeiculo value : StatusVeiculo.values()) {
            if(value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Invalid StatusVeiculo code");


    }

}
