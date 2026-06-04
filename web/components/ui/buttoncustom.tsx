interface BotaoDestaqueProps {
  label: string; // O nome que você vai escolher ao importar
  href: string;  // O link de destino
}

export default function BotaoDestaque({ label, href }: BotaoDestaqueProps) {
  return (
        <a href={href} 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all font-medium"
        >
          {label}
        </a>
  );
}