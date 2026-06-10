interface BotaoDestaqueProps {
  label: string; // O nome que você vai escolher ao importar
  href?: string;  // O link de destino
}

export default function BotaoDestaque({ label, href }: BotaoDestaqueProps) {
  return (
        <a href={href} 
          className="bg-black text-white font-bold cursor-pointer px-4 py-2 rounded-lg hover:bg-amber-500 transition-all "
        >
          {label}
        </a>
  );
}