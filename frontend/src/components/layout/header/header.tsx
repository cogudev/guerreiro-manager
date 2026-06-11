
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger , SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Você precisará instalar: npm install lucide-react
import BotaoDestaque from "@/components/ui/buttoncustom"
import {Login} from "@/components/layout/sections/login"
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="font-(family-name:--font-turret) text-2xl font-bold">Guerreiro Locações</div>

        {/* Menu Desktop: visível apenas em telas grandes (md:flex) */}
        <nav className="hidden md:flex gap-6 items-center font-semibold  font-(family-name:--font-turret) ">
          <a href="#inicio" className=" hover:text-gray-500 transition-all">Inicio</a>
          <a href="#sobre " className=" hover:text-gray-500 transition-all">Sobre</a>
          <a href="#contato" className=" hover:text-gray-500 transition-all">Contato</a>
            <Login/>
        </nav>

        {/* Menu Mobile: visível apenas em telas pequenas (md:hidden) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="w-8 h-8"/>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Adicione o SheetHeader e o SheetTitle aqui */}
              <SheetHeader>
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle> 
              </SheetHeader>

              <div className="flex flex-col gap-10 mt-20 items-center font-(family-name:--font-turret)">
                <Link href="#inicio" className="text-xl font-semibold hover:text-gray-600">Início</Link>
                <Link href="#sobre" className="text-xl font-semibold hover:text-gray-600">Sobre</Link>
                <Link href="#contato" className="text-xl font-semibold hover:text-gray-600">Contato</Link>
                <div className="[&>a]:text-xl font-semibold">
                    <Login/>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}