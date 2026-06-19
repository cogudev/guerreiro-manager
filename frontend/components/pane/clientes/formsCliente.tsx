import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState, useEffect } from 'react';

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cliente } from "@/types/cliente"

interface FormsClienteProps {
    cliente? : Cliente
    onSubmit?: (cliente: Cliente) => Promise<void>;
}

export function FormsCliente({ cliente, onSubmit }: FormsClienteProps){

    const [form, setForm] = useState<Cliente>(
        cliente ?? {
            id: "",
            nome: "",
            cpf: "",
            telefone: "",
            email: "",
            endereco: "",
        }
    );
    useEffect(() => {
        if (cliente) {
            setForm(cliente);
        } else {
            setForm({ id: "", nome: "", cpf: "", telefone: "", email: "", endereco: "" });
        }
    }, [cliente]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
        ...prev,
        [name]: value
    }));
    };

    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (onSubmit) await onSubmit(form);
    }

    const resetForm = () => {
        setForm(cliente ?? { id: "", nome: "", cpf: "", telefone: "", email: "", endereco: "" });
    };

    return(
 <Dialog onOpenChange={(open) => !open && resetForm()}>
     <DialogTrigger asChild >
          <Button variant="outline" className="w-full">{cliente ? "Detalhes" : "Novo Cliente"}</Button>
     </DialogTrigger>
       
        <DialogContent  className="sm:max-w-sm">
            <DialogHeader>
            <DialogTitle>{cliente ? "Detalhes" : "Novo Cliente"}</DialogTitle>
            <DialogDescription>
                    {cliente ? "Faça edições do cliente aqui, ao confirmar não é possivel retornar!" : "Criar novo cliente, ao confirmar, o novo cliente será adicionado!"}
            </DialogDescription>
          </DialogHeader>
      <form className="w-full space-y-4" onSubmit={handleFormSubmit} >
          
          <FieldGroup>
            <Field>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" name="nome" value={form?.nome} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" name="cpf" value={form?.cpf} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" name="telefone" value={form?.telefone} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" value={form?.email} onChange={handleChange}/>
            </Field>   
            <Field>
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" name="endereco" value={form?.endereco} onChange={handleChange}/>
            </Field>        
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{cliente ? "Editar" : "Novo Cliente"}</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>


    )
}