import { section } from "framer-motion/client";
import BotaoDestaque from "@/components/ui/buttoncustom";
import Image from "next/image";

export function Info(){
    return(

        <section id="sobre" className="w-full p-5 flex flex-col items-center justify-center">
             <p className="text-black text-4xl text-center font-bold my-10 font-(family-name:--font-turret)">Guerreiro locações, tradição na locação de veículos agrarios.</p>
            <div className="bg-black w-full  max-w-5xl rounded-lg grid grid-cols-2 p-4">
                <div className="flex flex-col items-start space-y-6 justify-around p-5">
                    <div className="space-y-3">
                     <p className="text-xl text-white font-black font-(family-name:--font-turret)">Conheça a Guerreiro Locações</p>
                     <p className="text-justify text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>

                        <div className="font-(family-name:--font-turret) text-xl [&>a]:bg-amber-500 [&>a]:hover:bg-amber-400">
                            <BotaoDestaque label="Saiba Mais" href="" />
                        </div>
                     
                </div>
                <div className="relative flex items-center justify-center">
                    <Image
                        src="/infoimage.png"
                        alt="Descrição da imagem"
                        fill
                        className="object-cover" // Isso garante que a imagem cubra a área sem distorcer
                    />
                </div>
            </div>
            

        </section>
    )
}