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



import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Search } from "lucide-react";

import { useState }from 'react';

import { useClientes } from '@/hooks/useClientes';

import { FormsCliente } from "./formsCliente";
import { DeletaCliente } from "./deletaCliente";

export default function ListaClientes(){
    const { data, isLoading, error, loadClientes, insertCliente, removeCliente } = useClientes();
    const [busca, setBusca] = useState("");
    const clientesFiltrados = data.filter((cliente) =>
        cliente.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return(
        <Card className="w-full max-w-2xl dark">
            <CardHeader>
                <CardTitle>Clientes</CardTitle>
                <CardDescription>Para dados sensiveis e edição use o botão Detalhes</CardDescription>
                <CardAction>
                    <Field>
                        <FieldLabel>
                            Buscar Cliente
                        </FieldLabel>
                        <InputGroup className="max-w-xs">
                            <InputGroupInput  placeholder="Buscar..." onChange={(e) => setBusca(e.target.value)}/>
                                <InputGroupAddon><Search /></InputGroupAddon>
                            <InputGroupAddon align="inline-end"></InputGroupAddon>
                        </InputGroup>

                    </Field>
                </CardAction>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>Telefone</TableHead>
                            <TableHead className="text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clientesFiltrados.map((cliente)=>(
                         <TableRow key={cliente.id}>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="text-lg">{cliente.nome}</span>
                                    <span className="text-xs">{cliente.cpf}</span>
                                </div>
                            </TableCell>
                            <TableCell>{cliente.telefone}</TableCell>
                            <TableCell>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="flex-1">
                                        <FormsCliente cliente={cliente}  onSubmit={insertCliente}/>

                                    </div>
                                    <div className="flex-1">
                                       <DeletaCliente onDelete={() => removeCliente(cliente.id)}/>

                                    </div>

                                    
                                    

                                    

                                </div>
                            </TableCell>
                        </TableRow>
                        ))

                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter >
                    <FormsCliente onSubmit={insertCliente}/>
            </CardFooter>
        </Card>
    )
}