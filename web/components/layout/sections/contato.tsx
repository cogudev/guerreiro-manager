import { div } from "framer-motion/client";
import {Input} from "@/components/ui/input-custom"
import BotaoDestaque from "@/components/ui/buttoncustom";


export function Contato(){
    return(
        <section id="contato" className="p-5 my-5 flex justify-center ">
            <form className="flex pb-8 shadow-[5px_10px_15px_-3px_rgba(0,0,0,0.6)] space-y-2 border-amber-500 border-2 flex-col w-full max-w-2xl items-center bg-gray-500 rounded-lg">
                <div className="bg-amber-500 w-full p-4 rounded-t-md"> <p className="text-black text-4xl text-center font-bold font-(family-name:--font-turret)">Entre em Contato</p></div>
                
                <div className="w-full mt-5">
                    <Input label="Digite seu nome" type="text" id="nome"/>
                    <Input label="Digite seu e-mail" type="text" id="email"/>
                    <div className="flex">
                        <Input label="Nome da empresa" type="text" id="empresa"/>
                        <Input label="Digite seu telefone" type="text" id="telefone"/>
                    </div>
                    <Input label="Motivo do contato"  id="texto" multiline/>
                </div>

                <div className="font-(family-name:--font-turret) text-2xl min-w-36 [&>a]:min-w-36 [&>a]:w-full [&>a]:h-16 [&>a]:flex [&>a]:items-center  [&>a]:justify-center">
                    <BotaoDestaque href="" label="Enviar"/>
                </div>
                
                
            </form>
        </section>
    )
}

