"use client"



import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Locacao } from "@/types/locacao";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useClientes } from "@/hooks/useClientes";
import { useVeiculos } from "@/hooks/useVeiculos";

interface FormsLocacaoProps {
  locacao?: Locacao;
  onSubmit?: (locacao: Locacao) => Promise<void>;
}

const STATUS_LOCACAO = [
  "RESERVADO",
  "EM_ANDAMENTO",
  "FINALIZADO",
  "CANCELADO",
] as const;


const emptyLocacao: Locacao = {
  id: "",
  cliente: {
    id: "",
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    endereco: "",
  },
  veiculo: {
    id: "",
    placa: "",
    chassi: "",
    modelo: "",
    anoFabricacao: "",
    horimetroAtual: "",
    kmAtual: "",
    status: "",
  },
  valorVeiculo: 0,
  valorTotal: 0,
  dataRetirada: "",
  dataEntrega: "",
  status: "RESERVADO",
  adicionais: [],
};

export function FormsLocacao({ locacao, onSubmit }: FormsLocacaoProps) {
  const [form, setForm] = useState<Locacao>(locacao ?? emptyLocacao);
const { data: clientes } = useClientes();
const { data: veiculos } = useVeiculos();

  useEffect(() => {
    setForm(locacao ?? emptyLocacao);
  }, [locacao]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: name === "valorVeiculo" ? Number(value) : value,
    }));
  }

  function handleClienteIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      cliente: {
        ...prev.cliente,
        id: e.target.value,
      },
    }));
  }

  function handleVeiculoIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      veiculo: {
        ...prev.veiculo,
        id: e.target.value,
      },
    }));
  }

  function handleAdicionalChange(
    index: number,
    field: "nome" | "descricao" | "preco",
    value: string
  ) {
    setForm(prev => ({
      ...prev,
      adicionais: prev.adicionais.map((adicional, i) =>
        i === index
          ? {
              ...adicional,
              [field]: field === "preco" ? Number(value) : value,
            }
          : adicional
      ),
    }));
  }

  function adicionarAdicional() {
    setForm(prev => ({
      ...prev,
      adicionais: [
        ...prev.adicionais,
        {
          nome: "",
          descricao: "",
          preco: 0,
        },
      ],
    }));
  }

  function removerAdicional(index: number) {
    setForm(prev => ({
      ...prev,
      adicionais: prev.adicionais.filter((_, i) => i !== index),
    }));
  }

  async function handleFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (onSubmit) await onSubmit(form);
  }

  function resetForm() {
    setForm(locacao ?? emptyLocacao);
  }

  return (
    <Dialog onOpenChange={(open) => !open && resetForm()}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          {locacao ? "Detalhes" : "Nova Locação"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>
            {locacao ? "Detalhes da Locação" : "Nova Locação"}
          </DialogTitle>

          <DialogDescription>
            {locacao
              ? "Faça edições da locação aqui."
              : "Criar nova locação."}
          </DialogDescription>
        </DialogHeader>

        <form className="w-full space-y-4" onSubmit={handleFormSubmit}>
          <FieldGroup>
            <Field>
             <Select
                value={form.cliente.id}
                onValueChange={(clienteId) => {

                const clienteSelecionado =
                    clientes.find(c => c.id === clienteId);

                if (!clienteSelecionado) return;

                setForm(prev => ({
                    ...prev,
                    cliente: clienteSelecionado
                }));
                }}
                >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o cliente" />
                </SelectTrigger>

                <SelectContent>
                    {clientes.map((cliente) => (
                    <SelectItem key={cliente.id} value={cliente.id}>
                        {cliente.nome} - {cliente.cpf}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            </Field>

            <Field>
                <Select
                    value={form.veiculo.id}
                    onValueChange={(veiculoId) => {

                    const veiculoSelecionado =
                        veiculos.find(v => v.id === veiculoId);

                    if (!veiculoSelecionado) return;

                    setForm(prev => ({
                        ...prev,
                        veiculo: veiculoSelecionado
                    }));
}}
                    >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o veículo" />
                    </SelectTrigger>

                    <SelectContent>
                        {veiculos.map((veiculo) => (
                        <SelectItem key={veiculo.id} value={veiculo.id}>
                            {veiculo.modelo} - {veiculo.placa}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </Field>

            <Field>
              <Label htmlFor="valorVeiculo">Valor do Veículo</Label>
              <Input
                id="valorVeiculo"
                name="valorVeiculo"
                type="number"
                value={form.valorVeiculo}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label htmlFor="dataRetirada">Data Retirada</Label>
              <Input
                id="dataRetirada"
                name="dataRetirada"
                type="date"
                value={form.dataRetirada}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label htmlFor="dataEntrega">Data Entrega</Label>
              <Input
                id="dataEntrega"
                name="dataEntrega"
                type="date"
                value={form.dataEntrega}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label>Status</Label>

              <Select
                value={form.status}
                onValueChange={(value) => {
                  setForm(prev => ({
                    ...prev,
                    status: value as Locacao["status"],
                  }));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>

                <SelectContent>
                  {STATUS_LOCACAO.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label>Adicionais</Label>

              <div className="space-y-3">
                {form.adicionais.map((adicional, index) => (
                  <div key={index} className="space-y-2 border p-2 rounded-md">
                    <Input
                      placeholder="Nome"
                      value={adicional.nome}
                      onChange={(e) =>
                        handleAdicionalChange(index, "nome", e.target.value)
                      }
                    />

                    <Input
                      placeholder="Descrição"
                      value={adicional.descricao}
                      onChange={(e) =>
                        handleAdicionalChange(index, "descricao", e.target.value)
                      }
                    />

                    <Input
                      placeholder="Preço"
                      type="number"
                      value={adicional.preco}
                      onChange={(e) =>
                        handleAdicionalChange(index, "preco", e.target.value)
                      }
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => removerAdicional(index)}
                    >
                      Remover adicional
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={adicionarAdicional}
                >
                  Adicionar adicional
                </Button>
              </div>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">
              {locacao ? "Editar" : "Nova Locação"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}