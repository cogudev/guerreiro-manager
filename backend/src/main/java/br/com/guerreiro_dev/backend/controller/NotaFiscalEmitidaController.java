package br.com.guerreiro_dev.backend.controller;

import br.com.guerreiro_dev.backend.domain.NotaFiscalEmitida;
import br.com.guerreiro_dev.backend.service.NotaFiscalEmitidaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/notas-fiscais")
@RequiredArgsConstructor
public class NotaFiscalEmitidaController {

    private final NotaFiscalEmitidaService notaFiscalService;

    @GetMapping
    public ResponseEntity<List<NotaFiscalEmitida>> findAll() {
        List<NotaFiscalEmitida> notas = notaFiscalService.findAll();
        return ResponseEntity.ok().body(notas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NotaFiscalEmitida> findById(@PathVariable UUID id) {
        NotaFiscalEmitida nota = notaFiscalService.findById(id);
        return ResponseEntity.ok().body(nota);
    }

    @PostMapping
    public ResponseEntity<NotaFiscalEmitida> insert(@RequestBody NotaFiscalEmitida notaFiscal) {
        NotaFiscalEmitida novaNota = notaFiscalService.insert(notaFiscal);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaNota);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadPdf(@PathVariable UUID id) {
        NotaFiscalEmitida nota = notaFiscalService.findById(id);

        if (nota.getPdfArquivo() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"nota-fiscal-" + nota.getNumeroNota() + ".pdf\"")
                .body(nota.getPdfArquivo());
    }
}
