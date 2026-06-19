import { useState, useEffect } from 'react';
import { Veiculo} from '@/types/veiculo';

import {getVeiculos,createVeiculo,deleteVeiculo} from '@/services/veiculoService';

export function useVeiculos() {
  const [data, setData] = useState<Veiculo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  async function loadVeiculos() {

    setIsLoading(true);

    try {

        setError(null);

        const veiculos =
            await getVeiculos();

        setData(veiculos ?? []);

    } catch (err) {

        if (err instanceof Error) {
            setError(err.message);
        }

    } finally {

        setIsLoading(false);
    }
  }

   async function insertVeiculo(veiculo : Veiculo){

        await createVeiculo(veiculo);

        await loadVeiculos();
    }

    async function removeVeiculo(id: string) {

        await deleteVeiculo(id);

        await loadVeiculos();
    }
    
    useEffect(() => {
        loadVeiculos();
    }, []);

      return {
        data,
        isLoading,
        error,
        loadVeiculos,
        insertVeiculo,
        removeVeiculo
    };
}