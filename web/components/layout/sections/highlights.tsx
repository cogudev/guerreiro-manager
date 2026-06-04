import Card from "@/components/ui/card"
import { BadgeCheck, Award, ShieldCheck} from "lucide-react";
import Image from "next/image";

export function Highlights() {
  return (
    <section className="w-full bg-mist-950 p-10 space-y-10">
      <p className="text-white text-4xl text-center font-bold">Melhor escolha em locação de veiculos agriculas</p>
      <div className=" px-10 flex gap-y-5 flex-col justify-center items-center md:flex-row md:justify-evenly">
        <Card tittle="Lorem ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "
              media={ <Image src="/globe.svg" alt="Ícone de globo" width={100} height={100}/>}
              icon={<Award className="w-15 h-15 text-green-500" />}
              
          />
          <Card tittle="Lorem ipsum"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "
                media={ <Image src="/window.svg" alt="Ícone de globo" width={100} height={100} />}
                icon={<ShieldCheck className="w-15 h-15 text-green-500" />}
                
          />
          <Card tittle="Lorem ipsum"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "
                media={ <Image src="/vercel.svg" alt="Ícone de globo" width={100} height={100} />}
                icon={<BadgeCheck className="w-15 h-15 text-green-500" />}
          />
        </div>
       
    </section>
  );
}