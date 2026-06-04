import Image from "next/image";
import { Banner } from "@/components/layout/sections/banner";
import { Header } from "@/components/layout/header/header"
import { Highlights } from "@/components/layout/sections/highlights";
import {Info} from "@/components/layout/sections/info"
import {Contato} from "@/components/layout/sections/contato"
import {Footer} from "@/components/layout/sections/footer"

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner />
       
      <Highlights/>
      <Info/>
     <Contato/>
    <Footer/>
    </main>
  );
}
