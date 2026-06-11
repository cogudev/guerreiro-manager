export interface Cliente {
  id: string; // Agora ele é obrigatório na leitura (GET)
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
}

export type ClienteCreate = Omit<Cliente, 'id'>;