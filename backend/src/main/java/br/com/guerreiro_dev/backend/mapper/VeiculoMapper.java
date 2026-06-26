package br.com.guerreiro_dev.backend.mapper;

import br.com.guerreiro_dev.backend.domain.Veiculo;

import br.com.guerreiro_dev.backend.dto.veiculo.VeiculoCreateDTO;
import br.com.guerreiro_dev.backend.dto.veiculo.VeiculoResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class VeiculoMapper {

    public Veiculo toEntity(VeiculoCreateDTO dto){

        Veiculo veiculo = new Veiculo();
        veiculo.setStatus(dto.status());
        veiculo.setModelo(dto.modelo());
        veiculo.setKmAtual(dto.kmAtual());
        veiculo.setHorimetroAtual(dto.horimetroAtual());
        veiculo.setKmAtual(dto.kmAtual());
        veiculo.setPlaca(dto.placa());
        veiculo.setChassi(dto.chassi());

        return veiculo;
    }

    public VeiculoResponseDTO toResponseDTO(Veiculo veiculo){

        return new VeiculoResponseDTO(
                veiculo.getId(),
                veiculo.getPlaca(),
                veiculo.getChassi(),
                veiculo.getModelo(),
                veiculo.getAnoFabricacao(),
                veiculo.getHorimetroAtual(),
                veiculo.getKmAtual(),
                veiculo.getStatus()
        );
    }


}
