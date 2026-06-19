import { Veiculo } from "../types/veiculo";

import { request } from "@/lib/http";

export function getVeiculos() {
    return request<Veiculo[]>(
        "/api/veiculos"
    );
}

export function deleteVeiculo(id: string) {
    return request<void>(
        `/api/veiculos/${id}`,
        {
            method: "DELETE"
        }
    );
}

export function createVeiculo(
    veiculo: Veiculo
) {
    return request<Veiculo>(
        "/api/veiculos",
        {
            method: "POST",
            body: JSON.stringify(veiculo)
        }
    );
}