import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import BotaoDestaque  from "@/components/ui/buttoncustom"
import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,

} from "@/components/ui/card";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export function Login(){
    return(
       

            <AlertDialog>
                <AlertDialogTrigger asChild>
                 <BotaoDestaque  label="Login"/>
                </AlertDialogTrigger>
                <AlertDialogContent>
                     <AlertDialogTitle className="text-xl">Guerreiro Holding</AlertDialogTitle>
                     <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login Administrativo</CardTitle>
        <CardDescription>
          Painel administrativo para gestores da guerreiro holding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Login</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o login"
                required
                className="h-10"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>

              </div>
              <Input id="password" type="password" placeholder="Digite a senha" className="h-10" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button type="submit" className="w-full text-xl bg-green-600 hover:bg-green-600/90 h-10">
          <Link href={"/admin"}>Login</Link>
        </Button>
        <AlertDialogCancel className="w-full text-xl bg-red-500 text-white hover:bg-red-500/90 h-10 hover:text-white">Cancel</AlertDialogCancel>
        
      </CardFooter>
    </Card>
                </AlertDialogContent>
            </AlertDialog>

    )
}