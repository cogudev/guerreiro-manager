'use client'; // Essencial para componentes que usam hooks

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


import { useState }from 'react';

import { useVeiculos } from '@/hooks/useVeiculos';
import {Button} from '@/components/ui/button'
import { DeletaVeiculo } from "./deletaVeiculo";
import { FormsVeiculo } from "./formsVeiculo";

export function ListaVeiculos(){
    const { data, isLoading, error, loadVeiculos, insertVeiculo, removeVeiculo} = useVeiculos();
    
    const [statusFiltro, setStatusFiltro] = useState<"TODOS" | "DISPONIVEL" | "ALUGADO" | "MANUTENCAO">("TODOS");
    const veiculosFiltrados = data.filter((veiculo) => {
      return (
          statusFiltro === "TODOS" ||
          veiculo.status === statusFiltro
      );
      });
    
    return(
       <Card className="w-full max-w-2xl dark">
                   <CardHeader>
                       <CardTitle>Veiculos</CardTitle>
                       <CardDescription>Para dados sensiveis e edição use o botão Detalhes</CardDescription>
                       <CardAction>
                           <Field>
                               <FieldLabel>
                                   Buscar Veiculo
                               </FieldLabel>
                                <div className="grid grid-cols-2 gap-2">

                                        <Button className="rounded-2xl" variant={"outline"} onClick={() => setStatusFiltro("TODOS")}>Todos</Button>
                                        <Button className="rounded-2xl" variant={"outline"} onClick={() => setStatusFiltro("DISPONIVEL")}>Disponível</Button>
                                        <Button className="rounded-2xl" variant={"outline"} onClick={() => setStatusFiltro("ALUGADO")}>Alugado</Button>
                                        <Button className="rounded-2xl" variant={"outline"} onClick={() => setStatusFiltro("MANUTENCAO")}>Manutenção</Button>

                                </div>
       
                           </Field>
                       </CardAction>
                   </CardHeader>
                   <CardContent>
                       <Table>
                           <TableHeader>
                               <TableRow>
                                   <TableHead>Veiculo</TableHead>
                                   <TableHead>Status</TableHead>
                                   <TableHead className="text-center">Ações</TableHead>
                               </TableRow>
                           </TableHeader>
                           <TableBody>
                               {veiculosFiltrados.map((veiculo)=>(
                                <TableRow key={veiculo.id}>
                                   <TableCell>
                                       <div className="flex flex-col">
                                           <span className="text-lg">{veiculo.modelo}</span>
                                           <span className="text-xs">{veiculo.placa}</span>
                                       </div>
                                   </TableCell>
                                   <TableCell><span className="rounded-2xl p-2 font-medium bg-secondary  ">{veiculo.status}</span></TableCell>
                                   <TableCell>
                                       <div className="flex justify-between">
                                        <div>
                                            <FormsVeiculo veiculo={veiculo} onSubmit={insertVeiculo}/>
                                        </div>
                                        <DeletaVeiculo onDelete={() => removeVeiculo(veiculo.id)}/>
       
                                       </div>
                                   </TableCell>
                               </TableRow>
                               ))
       
                               }
                           </TableBody>
                       </Table>
                   </CardContent>
                   <CardFooter >
                             <FormsVeiculo onSubmit={insertVeiculo}/>
                   </CardFooter>
               </Card>
    )
}