import 'react'


function MenuCima() {
  const menu = [
    {
      nome: 'Home',
      link: '#'
    },
    {
      nome: 'Sobre',
      link: '#'
    },
    {
      nome: 'Experiência',
      link: '#'
    },
    {
      nome: 'Projetos',
      link: '#'
    },
    {
      nome: 'Contato',
      link: '#'
    },
  ]

  return (
    <nav className="flex items-center justify-between px-48 bg-[#1D181A] w-full top-0 left-0 z-[1000] h-[62px] border-b border-solid border-b-[#403534]">
      <div className="logo">
        <span className="font-jetbrains text-[24px]">Rafael<strong className="text-[#DC143C] font-jetbrains">.</strong>Kon</span>
      </div>

      <div className="menu">
        <ul className="flex items-end gap-16">
          {menu.map((m, i) => (
            <li key={i}>
              <a href={m.link} className='h-[62px] border-b-4 border-b-transparent flex items-center justify-center transition-colors duration-300 hover:border-b-[#DC143C]'>{m.nome}</a>
            </li>
          ))}

        </ul>
      </div>

    </nav>

  );
}



export default MenuCima;

