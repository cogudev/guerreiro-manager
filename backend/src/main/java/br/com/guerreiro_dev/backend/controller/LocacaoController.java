package br.com.guerreiro_dev.backend.controller;


import br.com.guerreiro_dev.backend.domain.Locacao;
import br.com.guerreiro_dev.backend.service.LocacaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/locacoes")
@RequiredArgsConstructor
public class LocacaoController {

    private final LocacaoService locacaoService;

    @GetMapping
    public ResponseEntity<List<Locacao>> findAll(){
        List<Locacao> locacoes = locacaoService.findAll();
        return ResponseEntity.ok().body(locacoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Locacao> findById(@PathVariable UUID id){
        Locacao locacao = locacaoService.findById(id);
        return ResponseEntity.ok().body(locacao);
    }

    @PostMapping
    public ResponseEntity<Locacao> insert(@RequestBody Locacao locacao){
        Locacao novaLocacao = locacaoService.insert(locacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaLocacao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        locacaoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
