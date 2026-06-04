import { div } from "framer-motion/client";
import {Input} from "@/components/ui/input"
import BotaoDestaque from "@/components/ui/buttoncustom";


export function Contato(){
    return(
        <section id="contato" className="p-5 my-5 flex justify-center">
            <form className="flex pb-8 space-y-2 border-blue-400 border-2 flex-col w-full max-w-2xl items-center bg-gray-400 rounded-lg">
                <div className="bg-blue-400 w-full p-4 rounded-t-lg"> <p className="text-black text-4xl text-center font-bold">Entre em Contato</p></div>
                
                <div className="w-full">
                    <Input label="Digite seu nome" type="text" id="nome"/>
                    <Input label="Digite seu e-mail" type="text" id="email"/>
                    <div className="flex">
                        <Input label="Nome da empresa" type="text" id="empresa"/>
                        <Input label="Digite seu telefone" type="text" id="telefone"/>
                    </div>
                    <Input label="Motivo do contato"  id="texto" multiline/>
                </div>

                <div className="min-w-36 [&>a]:min-w-36 [&>a]:w-full [&>a]:h-16 [&>a]:flex [&>a]:items-center  [&>a]:justify-center [&>a]:text-xl">
                    <BotaoDestaque href="" label="Enviar"/>
                </div>
                
                
            </form>
        </section>
    )
}

