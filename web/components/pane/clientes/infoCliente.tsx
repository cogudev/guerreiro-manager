import { Cliente } from "@/types/cliente"; // Importe a interface
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

interface InfoClienteProps {
  cliente: Cliente; // Aqui você diz: "eu espero um objeto do tipo Cliente"
}

export function InfoCliente({ cliente }: InfoClienteProps){
    return(
<div className="dark">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Detalhes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>{cliente.nome}</AlertDialogTitle>
            <AlertDialogTitle>{cliente.cpf}</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
</div>
    )
}