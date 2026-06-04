
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger , SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Você precisará instalar: npm install lucide-react
import BotaoDestaque from "@/components/ui/buttoncustom"
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl">Guerreiro Locações</div>

        {/* Menu Desktop: visível apenas em telas grandes (md:flex) */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
<BotaoDestaque label="Login" href="/login" />
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

              <div className="flex flex-col gap-10 mt-20 items-center">
                <Link href="#inicio" className="text-lg font-medium hover:text-gray-600">Início</Link>
                <Link href="#sobre" className="text-lg font-medium hover:text-gray-600">Sobre</Link>
                <Link href="#contato" className="text-lg font-medium hover:text-gray-600">Contato</Link>
                <Link href="/login" className="text-lg font-medium hover:text-gray-600">Login</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}