'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Field,
  FieldLabel,
} from "@/components/ui/field";

import { useState } from 'react';

import { useLocacoes } from '@/hooks/useLocacao';
import { Button } from '@/components/ui/button';
import { DeletaLocacao } from "./deletaLocacao";
import { FormsLocacao } from "./formsLocacao";

export function ListaLocacoes() {
  const { data, insertLocacao, removeLocacao } = useLocacoes();

  const [statusFiltro, setStatusFiltro] = useState<"TODOS" | "RESERVADO" | "EM_ANDAMENTO" | "FINALIZADO" | "CANCELADO">("TODOS");

  const locacoesFiltradas = data.filter((locacao) => {
    return (
      statusFiltro === "TODOS" ||
      locacao.status === statusFiltro
    );
  });

  return (
    <Card className="w-full max-w-2xl dark">
      <CardHeader>
        <CardTitle>Locações</CardTitle>
        <CardDescription>
          Para dados sensíveis e edição use o botão Detalhes
        </CardDescription>

        <CardAction>
          <Field>
            <FieldLabel>
              Filtrar Locação
            </FieldLabel>

            <div className="grid grid-cols-2 gap-2">
              <Button className="rounded-2xl" variant="outline" onClick={() => setStatusFiltro("TODOS")}>Todos</Button>
              <Button className="rounded-2xl" variant="outline" onClick={() => setStatusFiltro("RESERVADO")}>Reservado</Button>
              <Button className="rounded-2xl" variant="outline" onClick={() => setStatusFiltro("EM_ANDAMENTO")}>Em andamento</Button>
              <Button className="rounded-2xl" variant="outline" onClick={() => setStatusFiltro("FINALIZADO")}>Finalizado</Button>
              <Button className="rounded-2xl" variant="outline" onClick={() => setStatusFiltro("CANCELADO")}>Cancelado</Button>
            </div>
          </Field>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Veículo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {locacoesFiltradas.map((locacao) => (
              <TableRow key={locacao.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-lg">{locacao.cliente.nome}</span>
                    <span className="text-xs">{locacao.cliente.telefone}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-lg">{locacao.veiculo.modelo}</span>
                    <span className="text-xs">{locacao.veiculo.placa}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="rounded-2xl p-2 font-medium bg-secondary">
                    {locacao.status}
                  </span>
                </TableCell>

                <TableCell>
                  R$ {locacao.valorTotal}
                </TableCell>

                <TableCell>
                  <div className="flex justify-between">
                    <div>
                     <DeletaLocacao onDelete={() => removeLocacao(locacao.id)}/>
                    </div>
                    <FormsLocacao locacao={locacao} onSubmit={insertLocacao} />
                    
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter>
        <FormsLocacao onSubmit={insertLocacao}/>
      </CardFooter>
    </Card>
  );
}