package br.com.guerreiro_dev.backend.service;


import br.com.guerreiro_dev.backend.domain.Cliente;
import br.com.guerreiro_dev.backend.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public List<Cliente> findAll(){
        return clienteRepository.findAll();
    }

    public Cliente findById(UUID id){
        return clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado com o ID: " + id));
    }

    public Cliente insert(Cliente cliente) {
        return clienteRepository.save(cliente);
    }


    public void delete(UUID id) {
        Cliente cliente = findById(id);
        clienteRepository.delete(cliente);
    }
}
