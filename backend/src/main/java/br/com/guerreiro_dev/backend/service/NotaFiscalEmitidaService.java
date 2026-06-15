package br.com.guerreiro_dev.backend.service;

import br.com.guerreiro_dev.backend.domain.NotaFiscalEmitida;
import br.com.guerreiro_dev.backend.repository.NotaFiscalEmitidaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NotaFiscalEmitidaService {

    private final NotaFiscalEmitidaRepository notaFiscalEmitidaRepository;

    public List<NotaFiscalEmitida> findAll(){
        return notaFiscalEmitidaRepository.findAll();
    }

    public NotaFiscalEmitida findById(UUID id){
        return notaFiscalEmitidaRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Nota fiscal emitada não encontrada com o id: " + id));
    }

    public NotaFiscalEmitida insert(NotaFiscalEmitida notaFiscalEmitida){
        return notaFiscalEmitidaRepository.save(notaFiscalEmitida);
    }

    public void delete(UUID id){
        NotaFiscalEmitida notaFiscalEmitida = findById(id);
        notaFiscalEmitidaRepository.delete(notaFiscalEmitida);
    }

}
