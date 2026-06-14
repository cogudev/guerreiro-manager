package br.com.guerreiro_dev.backend.domain;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class ItemAdicional  {

    private String nome;
    private String descricao;
    private String preco;


}
