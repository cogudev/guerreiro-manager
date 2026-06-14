package br.com.guerreiro_dev.backend.domain;


import br.com.guerreiro_dev.backend.domain.enums.StatusVeiculo;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_veiculo")
public class Veiculo implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String placa;
    private String chassi;
    private String modelo;
    private String anoFabricacao;
    private String horimetroAtual;
    private String kmAtual;

    @Enumerated(EnumType.STRING)
    private StatusVeiculo status;



}
