package br.com.guerreiro_dev.backend.repository;
import br.com.guerreiro_dev.backend.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClienteRepository extends JpaRepository <Cliente, UUID> {
}
