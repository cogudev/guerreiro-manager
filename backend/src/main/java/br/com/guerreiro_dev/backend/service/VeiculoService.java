package br.com.guerreiro_dev.backend.service;

import br.com.guerreiro_dev.backend.domain.Veiculo;
import br.com.guerreiro_dev.backend.repository.VeiculoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VeiculoService {

    private final VeiculoRepository veiculoRepository;

    public List<Veiculo> findAll(){
        return veiculoRepository.findAll();
    }

    public Veiculo findById(UUID id){
        return veiculoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Veiculo não encontrado com o ID: " + id));
    }

    public Veiculo insert(Veiculo veiculo){
        return veiculoRepository.save(veiculo);
    }

    public void delete(UUID id){
        Veiculo veiculo = findById(id);
        veiculoRepository.delete(veiculo);
    }

}
