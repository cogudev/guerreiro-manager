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
interface DeletaClienteProps {
    onDelete: () => void;
}

export function DeletaCliente({onDelete}: DeletaClienteProps){
    return(
<div className="dark">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full" variant="outline">Excluir</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita.<br></br>
            Cliente será permanentemente deletado.
            <br></br>
            A ação só pode ser realizada caso não possua locações pendentes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction   onClick={onDelete}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
</div>
    )
}