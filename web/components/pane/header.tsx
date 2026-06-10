
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger , SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Você precisará instalar: npm install lucide-react
import BotaoDestaque from "@/components/ui/buttoncustom"
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="font-(family-name:--font-turret) text-2xl font-bold">Guerreiro Locações</div>

        {/* Menu Mobile: visível apenas em telas pequenas (md:hidden) */}
        <div className="">
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="w-8 h-8"/>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Adicione o SheetHeader e o SheetTitle aqui */}
              <SheetHeader>
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle> 
              </SheetHeader>

              <div className="flex flex-col gap-12 mt-20 items-center font-(family-name:--font-turret) h-full">
                <Link href="/admin" className="text-xl font-semibold hover:text-gray-600">Início</Link>
                <Link href="/admin/clientes" className="text-xl font-semibold hover:text-gray-600">Clientes</Link>
                <Link href="/veiculos" className="text-xl font-semibold hover:text-gray-600">Veículos</Link>
                <Link href="/admin" className="text-xl font-semibold hover:text-gray-600">Nova Locação</Link>
                <Link href="/admin" className="text-xl font-semibold hover:text-gray-600">Relatorios</Link>
                <div className="[&>a]:text-xl font-semibold [&>a]:py-3 mt-auto mb-20 [&>a]:bg-red-500 [&>a]:hover:bg-red-500/90">
                  <BotaoDestaque label="SAIR" href="/"/>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}