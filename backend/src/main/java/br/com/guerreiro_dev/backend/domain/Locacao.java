package br.com.guerreiro_dev.backend.domain;

import br.com.guerreiro_dev.backend.domain.enums.StatusLocacao;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
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

    private BigDecimal valorVeiculo;
    private BigDecimal valorTotal;
    private LocalDate dataRetirada;
    private LocalDate dataEntrega;

    @Enumerated(EnumType.STRING)
    private StatusLocacao status;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "tb_locacao_adicionais", joinColumns = @JoinColumn(name = "locacao_id"))
    private List<ItemAdicional> adicionais = new ArrayList<>();

    public void calcularValorTotal() {
        BigDecimal totalAdicionais = adicionais.stream()
                .map(ItemAdicional::getPreco)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        this.valorTotal = valorVeiculo.add(totalAdicionais);
    }
}
