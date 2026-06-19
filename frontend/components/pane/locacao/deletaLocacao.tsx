import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

interface DeletaLocacaoProps {
  onDelete: () => void;
}

export function DeletaLocacao({ onDelete }: DeletaLocacaoProps) {
  return (
    <div className="dark">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Excluir</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Você tem certeza?
            </AlertDialogTitle>

            <AlertDialogDescription>
              Essa ação não pode ser desfeita.
              <br />
              A locação será permanentemente deletada.
              <br />
              Certifique-se de que a locação não está em andamento antes de continuar.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction onClick={onDelete}>
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}