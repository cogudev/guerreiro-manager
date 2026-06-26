package br.com.guerreiro_dev.backend.mapper;

import br.com.guerreiro_dev.backend.domain.Locacao;
import br.com.guerreiro_dev.backend.domain.NotaFiscalEmitida;
import br.com.guerreiro_dev.backend.dto.NotaFiscalEmitida.NotaFiscalEmitidaCreateDTO;
import br.com.guerreiro_dev.backend.dto.NotaFiscalEmitida.NotaFiscalEmitidaResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NotaFiscalEmitidaMapper {

    private final LocacaoMapper locacaoMapper;

    public NotaFiscalEmitida toEntity(NotaFiscalEmitidaCreateDTO dto, Locacao locacao){
        NotaFiscalEmitida nota = new NotaFiscalEmitida();
        nota.setLocacao(locacao);
        nota.setDataEmissao(dto.dataEmissao());
        return nota;
    }

    public NotaFiscalEmitidaResponseDTO toResponseDTO(NotaFiscalEmitida nota){
        return new NotaFiscalEmitidaResponseDTO(
          nota.getId(),
          nota.getNumeroNota(),
          nota.getDataEmissao(),
          locacaoMapper.toResponseDTO(nota.getLocacao())
        );
    }

}
