package br.com.guerreiro_dev.backend.service;

import br.com.guerreiro_dev.backend.domain.Locacao;
import br.com.guerreiro_dev.backend.repository.LocacaoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LocacaoService {

    private final LocacaoRepository locacaoRepository;

    public List<Locacao> findAll(){
        return locacaoRepository.findAll();
    }

    public Locacao findById(UUID id){
        return locacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Locação não encontrada com o id" + id));
    }

    public Locacao insert(Locacao locacao){
        locacao.calcularValorTotal();
        return locacaoRepository.save(locacao);
    }

    public void delete(UUID id){
        Locacao locacao = findById(id);
        locacaoRepository.delete(locacao);
    }
}
