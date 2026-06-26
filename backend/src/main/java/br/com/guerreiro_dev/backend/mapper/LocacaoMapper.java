package br.com.guerreiro_dev.backend.mapper;


import br.com.guerreiro_dev.backend.domain.Cliente;
import br.com.guerreiro_dev.backend.domain.ItemAdicional;
import br.com.guerreiro_dev.backend.domain.Locacao;
import br.com.guerreiro_dev.backend.domain.Veiculo;
import br.com.guerreiro_dev.backend.dto.locacao.ItemAdicionalDTO;
import br.com.guerreiro_dev.backend.dto.locacao.LocacaoCreateDTO;
import br.com.guerreiro_dev.backend.dto.locacao.LocacaoResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LocacaoMapper {

    private final ClienteMapper clienteMapper;
    private final VeiculoMapper veiculoMapper;


    public Locacao toEntity(LocacaoCreateDTO dto, Cliente cliente, Veiculo veiculo){

        Locacao locacao = new Locacao();

        locacao.setCliente(cliente);
        locacao.setVeiculo(veiculo);
        locacao.setValorVeiculo(dto.valorVeiculo());
        locacao.setDataRetirada(dto.dataRetirada());
        locacao.setDataEntrega(dto.dataEntrega());
        locacao.setStatus(dto.status());
        locacao.setAdicionais(dto.adicionais()
                .stream()
                .map(this::toItemAdicionalEntity)
                .toList()
        );
        return locacao;
    }


    public LocacaoResponseDTO toResponseDTO(Locacao locacao){
        return new LocacaoResponseDTO(
                locacao.getId(),
                clienteMapper.toResponseDTO(locacao.getCliente()),
                veiculoMapper.toResponseDTO(locacao.getVeiculo()),
                locacao.getValorVeiculo(),
                locacao.getValorTotal(),
                locacao.getDataRetirada(),
                locacao.getDataEntrega(),
                locacao.getStatus(),
                locacao.getAdicionais()
                        .stream().map(this::toItemAdicionalDTO)
                        .toList()
        );
    }

    private ItemAdicionalDTO toItemAdicionalDTO(ItemAdicional item) {
        return new ItemAdicionalDTO(
                item.getNome(),
                item.getDescricao(),
                item.getPreco()
        );
    }
    private ItemAdicional toItemAdicionalEntity(ItemAdicionalDTO dto){

        ItemAdicional item = new ItemAdicional();

        item.setNome(dto.nome());
        item.setDescricao(dto.descricao());
        item.setPreco(dto.preco());

        return item;
    }

}
