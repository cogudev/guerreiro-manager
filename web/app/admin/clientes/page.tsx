import Header from "@/components/pane/clientes/header"
import ListaClientes from "@/components/pane/clientes/listaClientes";

export default function Clientes() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen ">
      <Header/>
      <ListaClientes/>
    </main>
  );
}