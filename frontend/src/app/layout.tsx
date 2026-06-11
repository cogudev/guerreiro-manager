import type { Metadata } from "next";
import "./globals.css";
import { Geist, Turret_Road} from "next/font/google";
import { cn } from "@/lib/utils";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const turret = Turret_Road({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"], // Defina os pesos que você vai usar
  variable: '--font-turret' // ESSENCIAL: define a variável CSS
});

export const metadata: Metadata = {
  title: "Guerreiro Locações",
  description: "Locações de Veiculos e Soluções Agrárias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable, turret.variable)}>
        <head>
            

        </head>
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
