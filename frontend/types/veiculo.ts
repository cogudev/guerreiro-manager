export interface Veiculo {
  id: string; // Agora ele é obrigatório na leitura (GET)
  placa: string;
  chassi: string;
  modelo: string;
  status: string;
  anoFabricacao: string;
  horimetroAtual: string;
  kmAtual: string;
}

export type VeiculoCreate = Omit<Veiculo, 'id'>;