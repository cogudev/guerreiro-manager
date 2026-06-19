import { Locacao } from "../types/locacao";

import { request } from "@/lib/http";

export function getLocacoes() {
    return request<Locacao[]>(
        "/api/locacoes"
    );
}

export function deleteLocacao(id: string) {
    return request<void>(
        `/api/locacoes/${id}`,
        {
            method: "DELETE"
        }
    );
}

export function createLocacao(locacao: Locacao) {
    return request<Locacao>(
        "/api/locacoes",
        {
            method: "POST",
            body: JSON.stringify(locacao)
        }
    );
}
