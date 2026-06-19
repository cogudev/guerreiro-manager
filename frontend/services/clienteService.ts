import { Cliente } from "@/types/cliente";

import { request } from "@/lib/http";

export function getClientes() {
    return request<Cliente[]>(
        "/api/clientes"
    );
}

export function deleteCliente(id: string) {
    return request<void>(
        `/api/clientes/${id}`,
        {
            method: "DELETE"
        }
    );
}

export function createCliente(
    cliente: Cliente
) {
    return request<Cliente>(
        "/api/clientes",
        {
            method: "POST",
            body: JSON.stringify(cliente)
        }
    );
}