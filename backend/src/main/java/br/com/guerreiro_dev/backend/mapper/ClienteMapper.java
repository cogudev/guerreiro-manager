package br.com.guerreiro_dev.backend.mapper;

import br.com.guerreiro_dev.backend.domain.Cliente;
import br.com.guerreiro_dev.backend.dto.cliente.ClienteCreateDTO;
import br.com.guerreiro_dev.backend.dto.cliente.ClienteResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class ClienteMapper {

    public Cliente toEntity(ClienteCreateDTO dto){

        Cliente cliente = new Cliente();

        cliente.setNome(dto.nome());
        cliente.setCpf(dto.cpf());
        cliente.setTelefone(dto.telefone());
        cliente.setEmail(dto.email());
        cliente.setEndereco(dto.endereco());

        return cliente;
    }

    public ClienteResponseDTO toResponseDTO(Cliente cliente){
        return new ClienteResponseDTO(
                cliente.getId(),
                cliente.getNome(),
                cliente.getCpf(),
                cliente.getTelefone(),
                cliente.getEmail(),
                cliente.getEndereco()
        );
    }
}
