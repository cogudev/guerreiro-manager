import Image from "next/image";
import BotaoDestaque from "@/components/ui/buttoncustom"

export function Banner() {
  return (
    <section id="inicio" className="relative w-full h-[50vh] mt-16 bg-gray-500 flex items-center justify-center">

        <BotaoDestaque label="Saiba Mais" href="/" />
    </section>
  );
}