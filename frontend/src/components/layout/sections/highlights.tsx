import Card from "@/components/ui/card-custom"
import { BadgeCheck, Award, ShieldCheck, Clock, Van, HandCoins} from "lucide-react";
import Image from "next/image";


export function Highlights() {
  return (
    <section className="w-full bg-mist-950 p-10 space-y-10">
      <p className="text-white text-4xl text-center font-(family-name:--font-turret) font-bold">Melhor escolha em locação de veiculos agriculas</p>
      <div className=" px-10 flex gap-y-5 flex-col justify-center items-center md:flex-row md:justify-evenly">
        <Card tittle="Atendimento Personalizado"
              description="Oferecemos um suporte direto e ágil, entendendo a urgência e as necessidades específicas da sua empresa. "
              media={ <Clock size={90} className="text-amber-500"/>}
              icon={<Award className="w-15 h-15 text-green-900" />}
              
          />
          <Card tittle="Frota Revisada"
                description="Priorizamos a disponibilidade. Nossos veículos passam por manutenções rigorosas para garantir que seu serviço nunca pare. "
                media={ <Van  size={90} className="text-amber-500"/>}
                icon={<ShieldCheck className="w-8 h-8 text-green-900" />}
                
          />
          <Card tittle="Preço Justo e Flexível"
                description="Soluções de aluguel desenhadas para o seu orçamento, com condições flexíveis para o produtor rural. "
                media={ <HandCoins size={90} className="text-amber-500"/>}
                icon={<BadgeCheck className="w-15 h-15 text-green-900" />}
          />
        </div>
       
    </section>
  );
}