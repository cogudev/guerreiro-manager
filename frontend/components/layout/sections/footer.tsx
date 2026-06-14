import Image from "next/image"
export function Footer(){
    return(
        <footer className=" space-y-2 bg-gray-700  p-3 flex flex-col items-center ">
            <div>
                <p className="text-2xl">Guerreiro Holding</p>
                <p className="text-center">CNPJ: 111.111.111/0001</p>
            </div>

            <div className="bg-white w-full h-px"></div>

            <div className="flex w-full justify-evenly px-10 p-2 max-w-2xl">
                <Image src="/globe.svg" alt="Ícone de globo" width={50} height={50}/>
                <Image src="/globe.svg" alt="Ícone de globo" width={50} height={50}/>
                <Image src="/globe.svg" alt="Ícone de globo" width={50} height={50}/>
                <Image src="/globe.svg" alt="Ícone de globo" width={50} height={50}/>
            </div>

        </footer>
    )
}