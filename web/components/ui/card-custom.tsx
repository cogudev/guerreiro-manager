import Image from "next/image";
import { LucideIcon} from "lucide-react";



interface CardProps {
    tittle : string; // O nome que você vai escolher ao importar
    description : string;
    media: React.ReactNode; // 'children' ou 'icon' aqui aceitam qualquer coisa, inclusive uma tag <img /> ou <Icon />
    icon: React.ReactNode; 
}

export default function Card({ tittle, description, media, icon }: CardProps) {
  return (
    // Adicionada a perspectiva no pai para o efeito 3D real
    <nav className="group w-50 h-60 [perspective:1000px]">
      
      {/* Elemento que faz o giro */}
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente do Card */}
        {/* Adicionado [backface-visibility:hidden] e flex-col para alinhar ícone e texto */}
        <div className="absolute w-full h-full p-4 space-y-8 [backface-visibility:hidden] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex flex-col items-center">
            {media}

            <div className="space-y-4 w-full flex flex-col items-center">
                <div className="w-full  border-2 border-white "></div>
                <p className="text-amber-500 font-medium text-center text-2xl font-(family-name:--font-turret)">{tittle}</p>
            </div>

        </div>

        {/* Verso do Card */}
        <div className="absolute p-4 space-y-2 w-full h-full [backface-visibility:hidden] bg-amber-500 rounded-lg flex flex-col items-center justify-start [transform:rotateY(180deg)]">
            <p className="text-black font-bold text-2xl font-(family-name:--font-turret)">{tittle}</p>
            <p className="text-black text-center text-sm">{description}</p>
           
            {icon}
        </div>
      </div>
    </nav>
  );
}
