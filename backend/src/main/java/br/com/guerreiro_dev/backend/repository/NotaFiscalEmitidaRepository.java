package br.com.guerreiro_dev.backend.repository;
import br.com.guerreiro_dev.backend.domain.NotaFiscalEmitida;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NotaFiscalEmitidaRepository extends JpaRepository<NotaFiscalEmitida, UUID> {
}
