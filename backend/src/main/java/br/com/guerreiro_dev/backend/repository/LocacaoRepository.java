package br.com.guerreiro_dev.backend.repository;
import br.com.guerreiro_dev.backend.domain.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LocacaoRepository extends JpaRepository<Locacao, UUID> {



}
