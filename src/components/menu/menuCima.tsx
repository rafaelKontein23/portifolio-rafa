import 'react'
import { useState } from 'react';
import { Menu, X } from "lucide-react"; 


function MenuCima() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menu = [
    {
      nome: 'Home',
      link: '#home'
    },
    {
      nome: 'Sobre',
      link: '#sobre'
    },
    {
      nome: 'Habilidades',
      link: '#habilidades'
    },
    {
      nome: 'Projetos',
      link: '#projetos'
    },
    {
      nome: 'Contato',
      link: '#contato'
    },
  ]

  return (
    
    <nav className="bg-[#1D181A] w-full top-0 left-0 z-[1000] border-b border-solid border-b-[#403534] fixed">
    <div className="flex items-center justify-between h-[62px] container mx-auto px-4 ">
      {/* Logo */}
      <div className="logo">

    
        <span className="font-jetbrains text-[24px] ">
          
          Rafael<strong className="text-[#DC143C] font-jetbrains">.</strong>Kon
        </span>
      </div>

      <div className="hidden lg:flex ">
        <ul className="flex items-end gap-16">
          {menu.map((m, i) => (
            <li key={i}>
              <a
                href={m.link}
                className="h-[62px] border-b-4 border-b-transparent flex items-center justify-center transition-colors duration-300 hover:border-b-[#DC143C]"
              >
                {m.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="lg:hidden text-white"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {menuAberto && (
      <div className="lg:hidden absolute top-[62px] left-0 w-full bg-[#1D181A] border-b border-b-[#641616] z-50">
        <ul className="flex flex-col items-center gap-4 py-4">
          {menu.map((m, i) => (
            <li key={i}>
              <a
                href={m.link}
                className="text-white text-lg hover:text-[#DC143C]"
                onClick={() => setMenuAberto(false)}
              >
                {m.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>

  );
}



export default MenuCima;

