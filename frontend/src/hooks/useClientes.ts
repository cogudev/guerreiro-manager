import { useState, useEffect } from 'react';
import { Cliente } from '../types/cliente';
import { getClientes } from '../services/clienteService';

export function useClientes() {
  const [data, setData] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClientes()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}