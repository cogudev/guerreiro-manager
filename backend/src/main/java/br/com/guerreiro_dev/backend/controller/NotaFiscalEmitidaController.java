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





//    @GetMapping("/teste-pdf")
//    public ResponseEntity<byte[]> testePdf() {
//
//        UUID locacaoId = UUID.fromString(
//                "5072ce6b-f522-4ffc-ad55-b1fb147eecbf"
//        );
//
//        NotaFiscalEmitida nota =
//                notaFiscalService.emitirNota(locacaoId);
//
//        return ResponseEntity.ok()
//                .header(
//                        HttpHeaders.CONTENT_DISPOSITION,
//                        "attachment; filename=teste.pdf"
//                )
//                .contentType(MediaType.APPLICATION_PDF)
//                .body(nota.getPdfArquivo());
//    }




}

