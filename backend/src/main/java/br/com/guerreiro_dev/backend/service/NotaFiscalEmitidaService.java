package br.com.guerreiro_dev.backend.service;

import br.com.guerreiro_dev.backend.domain.Locacao;
import br.com.guerreiro_dev.backend.domain.NotaFiscalEmitida;
import br.com.guerreiro_dev.backend.infrastructure.GeradorNotaFiscal;
import br.com.guerreiro_dev.backend.repository.LocacaoRepository;
import br.com.guerreiro_dev.backend.repository.NotaFiscalEmitidaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NotaFiscalEmitidaService {

    private final NotaFiscalEmitidaRepository notaFiscalEmitidaRepository;
    private final LocacaoRepository locacaoRepository;
    private final GeradorNotaFiscal geradorNotaFiscal;

    public List<NotaFiscalEmitida> findAll(){
        return notaFiscalEmitidaRepository.findAll();
    }

    public NotaFiscalEmitida findById(UUID id){
        return notaFiscalEmitidaRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Nota fiscal emitada não encontrada com o id: " + id));
    }

    public void delete(UUID id){
        NotaFiscalEmitida notaFiscalEmitida = findById(id);
        notaFiscalEmitidaRepository.delete(notaFiscalEmitida);
    }

    public NotaFiscalEmitida emitirNota(UUID locacaoId){
        Locacao locacao = locacaoRepository.findById(locacaoId).
                orElseThrow(() -> new RuntimeException("Locação não encontrada com id: " + locacaoId));

        NotaFiscalEmitida notaFiscalEmitida = new NotaFiscalEmitida();
        notaFiscalEmitida.setLocacao(locacao);
        notaFiscalEmitida.setDataEmissao(LocalDate.now());
        notaFiscalEmitida.setNumeroNota(notaFiscalEmitidaRepository.count() + 1);
        byte[] pdf = geradorNotaFiscal.gerar(notaFiscalEmitida);
        notaFiscalEmitida.setPdfArquivo(pdf);


        return notaFiscalEmitidaRepository.save(notaFiscalEmitida);

    }



}
