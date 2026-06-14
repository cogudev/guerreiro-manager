import Image from "next/image";
import BotaoDestaque from "@/components/ui/buttoncustom"

export function Banner() {
  return (
    <section id="inicio" className="relative w-full h-[50vh] mt-16 bg-gray-500 flex items-center justify-center">
        <Image
          src="/ChatGPT_Image_9_de_jun_de_2026_16_40_24.png"
          alt="Banner Guerreiro Locações"
          fill
          className=" object-cover object-center"
          priority
        />
        <div className="relative mt-90 font-(family-name:--font-turret) text-2xl font-bold [&>a]:bg-amber-500 [&>a]:hover:bg-amber-400 hover:scale-110 transition-all">
          <BotaoDestaque label="Saiba mais"/>
        </div>
    </section>
  );
}