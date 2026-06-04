import { section } from "framer-motion/client";
import BotaoDestaque from "@/components/ui/buttoncustom";

export function Info(){
    return(

        <section id="sobre" className="w-full p-5 flex flex-col items-center justify-center">
             <p className="text-black text-4xl text-center font-bold my-10">Melhor escolha em locação de veiculos agriculas</p>
            <div className="bg-gray-400 w-full  max-w-5xl rounded-lg grid grid-cols-2 p-4">
                <div className="flex flex-col items-start space-y-6 justify-around p-5">
                    <div className="space-y-3">
                     <p className="text-xl font-bold">Lorem ipsum dolor sit amet</p>
                     <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                     
                        <BotaoDestaque label="Saiba Mais" href="" />
                     
                </div>
                <div className="bg-amber-200 flex items-center justify-center">
                    <p>imagem</p>
                </div>
            </div>
            

        </section>
    )
}