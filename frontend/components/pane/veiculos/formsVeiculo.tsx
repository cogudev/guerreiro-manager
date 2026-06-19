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

import { useState, useEffect } from 'react';

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Veiculo } from "@/types/veiculo";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormsVeiculoProps {
    veiculo? : Veiculo
    onSubmit?: (veiculo: Veiculo) => Promise<void>;
}

const STATUS_VEICULO = [
  "DISPONIVEL",
  "ALUGADO",
  "MANUTENCAO",
] as const;

export function FormsVeiculo({ veiculo, onSubmit }: FormsVeiculoProps){


    const [form, setForm] = useState<Veiculo>(
        veiculo ?? {
            id: "",
            placa: "",
            chassi: "",
            modelo: "",
            status: "",
            anoFabricacao: "",
            horimetroAtual: "",
            kmAtual: ""
            
        }
    );
    useEffect(() => {
        if (veiculo) {
            setForm(veiculo);
        } else {
            setForm({ id: "", placa: "", chassi: "", modelo: "", status: "", 
                anoFabricacao: "", horimetroAtual: "", kmAtual: "" });
        }
    }, [veiculo]);

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
       setForm(veiculo??{ id: "", placa: "", chassi: "", modelo: "", status: "", 
                anoFabricacao: "", horimetroAtual: "", kmAtual: "" });
    };

    return(
 <Dialog onOpenChange={(open) => !open && resetForm()}>
     <DialogTrigger asChild >
          <Button variant="outline" className="w-full">{veiculo ? "Detalhes" : "Novo Veiculo"}</Button>
     </DialogTrigger>
       
        <DialogContent  className="sm:max-w-sm">
            <DialogHeader>
            <DialogTitle>{veiculo ? "Detalhes" : "Novo Veiculo"}</DialogTitle>
            <DialogDescription>
                    {veiculo ? "Faça edições do veiculo aqui, ao confirmar não é possivel retornar!" : "Criar novo veiculo, ao confirmar, o novo veiculo será adicionado!"}
            </DialogDescription>
          </DialogHeader>
      <form className="w-full space-y-4" onSubmit={handleFormSubmit} >
          
          <FieldGroup>
            <Field>
              <Label htmlFor="modelo">modelo</Label>
              <Input id="modelo" name="modelo" value={form?.modelo} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="anoFabricacao">anoFabricacao</Label>
              <Input id="anoFabricacao" name="anoFabricacao" value={form?.anoFabricacao} onChange={handleChange}/>
            </Field>    
            <Field>
              <Label htmlFor="status">status</Label>

              <Select
                value={form.status}
                onValueChange={(value) => {
                  setForm(prev => ({
                    ...prev,
                    status: value
                  }))
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>

                <SelectContent>
                  {STATUS_VEICULO.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="placa">placa</Label>
              <Input id="placa" name="placa" value={form?.placa} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="chassi">chassi</Label>
              <Input id="chassi" name="chassi" value={form?.chassi} onChange={handleChange}/>
            </Field>
            <Field>
              <Label htmlFor="horimetroAtual">horimetroAtual</Label>
              <Input id="horimetroAtual" name="horimetroAtual" value={form?.horimetroAtual} onChange={handleChange}/>
            </Field>   
            <Field>
              <Label htmlFor="endereco">kmAtual</Label>
              <Input id="kmAtual" name="kmAtual" value={form?.kmAtual} onChange={handleChange}/>
            </Field>        
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{veiculo ? "Editar" : "Novo Veiculo"}</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>


    )
}