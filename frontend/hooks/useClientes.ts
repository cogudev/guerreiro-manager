import { useState, useEffect } from 'react';
import { Cliente } from '@/types/cliente';
import { getClientes, deleteCliente, createCliente } from '@/services/clienteService';

export function useClientes() {
  const [data, setData] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  async function loadClientes() {

    setIsLoading(true);

    try {

        setError(null);

        const clientes =
            await getClientes();

        setData(clientes ?? []);

    } catch (err) {

        if (err instanceof Error) {
            setError(err.message);
        }

    } finally {

        setIsLoading(false);
    }
  }

   async function insertCliente(cliente : Cliente){

        await createCliente(cliente);

        await loadClientes();
    }

    async function removeCliente(id: string) {

        await deleteCliente(id);

        await loadClientes();
    }
    
    useEffect(() => {
        loadClientes();
    }, []);

      return {
        data,
        isLoading,
        error,
        loadClientes,
        insertCliente,
        removeCliente
    };
}