import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

export interface ItemAdicional {
  nome: string;
  descricao: string;
  preco: number;
}

export type StatusLocacao =
  | "RESERVADO"
  | "EM_ANDAMENTO"
  | "FINALIZADO"
  | "CANCELADO";

export interface Locacao {
  id: string;

  cliente: Cliente;
  veiculo: Veiculo;

  valorVeiculo: number;
  valorTotal: number;

  dataRetirada: string;
  dataEntrega: string;

  status: StatusLocacao;

  adicionais: ItemAdicional[];
}

export type VeiculoCreate = Omit<Veiculo, 'id'>;