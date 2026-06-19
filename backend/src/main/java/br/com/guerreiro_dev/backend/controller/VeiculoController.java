package br.com.guerreiro_dev.backend.controller;

import br.com.guerreiro_dev.backend.domain.Veiculo;
import br.com.guerreiro_dev.backend.service.VeiculoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/veiculos")
@RequiredArgsConstructor
public class VeiculoController {

    private final VeiculoService veiculoService;

    @GetMapping
    public ResponseEntity<List<Veiculo>> findAll(){
        List<Veiculo> veiculos = veiculoService.findAll();
        return ResponseEntity.ok().body(veiculos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> findById(@PathVariable UUID id){
        Veiculo veiculo = veiculoService.findById(id);
        return ResponseEntity.ok().body(veiculo);
    }

    @PostMapping
    public ResponseEntity<Veiculo> insert(@RequestBody Veiculo veiculo){
        Veiculo novoVeiculo = veiculoService.insert(veiculo);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoVeiculo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        veiculoService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
