import { Cliente } from "../types/cliente";

const API_URL = "http://localhost:8080";

export async function getClientes(): Promise<Cliente[]> {
  try {
    const response = await fetch(`${API_URL}/api/clientes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Verifica se o status HTTP está na faixa 200-299
    if (!response.ok) {
      // Aqui você poderia ler o corpo do erro da API para obter mais detalhes
      throw new Error(`Falha ao carregar clientes: ${response.status} ${response.statusText}`);
    }

    // Converte a resposta bruta para o formato JSON tipado como Cliente[]
    const data: Cliente[] = await response.json();
    return data;
    
  } catch (error) {
    // Log do erro para monitoramento (ex: Sentry ou Console)
    console.error("Erro na camada de serviço (getClientes):", error);
    // Repassa o erro para ser tratado pelo componente ou hook
    throw error;
  }
}