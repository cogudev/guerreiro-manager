import { ListaLocacoes } from "@/components/pane/locacao/listaLocacao";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen ">
          <ListaLocacoes/>
    </main>
  );
}