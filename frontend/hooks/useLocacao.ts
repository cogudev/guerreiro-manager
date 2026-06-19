import { useState, useEffect } from 'react';
import { Locacao } from '@/types/locacao';

import {
getLocacoes,
createLocacao,
deleteLocacao
} from '@/services/locacaoService';

export function useLocacoes() {


const [data, setData] = useState<Locacao[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

async function loadLocacoes() {

    setIsLoading(true);

    try {

        setError(null);

        const locacoes =
            await getLocacoes();

        setData(locacoes ?? []);

    } catch (err) {

        if (err instanceof Error) {
            setError(err.message);
        }

    } finally {

        setIsLoading(false);
    }
}

async function insertLocacao(locacao: Locacao) {

    await createLocacao(locacao);

    await loadLocacoes();
}

async function removeLocacao(id: string) {

    await deleteLocacao(id);

    await loadLocacoes();
}

useEffect(() => {
    loadLocacoes();
}, []);

return {
    data,
    isLoading,
    error,
    loadLocacoes,
    insertLocacao,
    removeLocacao
};


}
