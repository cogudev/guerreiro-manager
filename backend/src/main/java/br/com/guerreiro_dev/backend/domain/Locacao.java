package br.com.guerreiro_dev.backend.domain;

import br.com.guerreiro_dev.backend.domain.enums.StatusLocacao;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_locacao")
public class Locacao implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "veiculo_id")
    private Veiculo veiculo;

    private String valorDiaria;
    private LocalDate dataRetirada;
    private LocalDate dataEntrega;

    @Enumerated(EnumType.STRING)
    private StatusLocacao status;

    @ElementCollection
    @CollectionTable(name = "tb_locacao_adicionais", joinColumns = @JoinColumn(name = "locacao_id"))
    private List<ItemAdicional> adicionais;

}
