package br.com.guerreiro_dev.backend.repository;
import br.com.guerreiro_dev.backend.domain.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VeiculoRepository extends JpaRepository<Veiculo, UUID> {
}
