import 'react'


function MenuCima() {
  return (
    <nav  className="flex items-center justify-between px-4 py-[50px] bg-[#1D181A] w-full top-0 left-0 z-[1000] h-[70px] border-b-[#403534]  ">
      <div className="logo">
        <span className="font-jetbrains">Rafael<strong className="text-[#DC143C] font-jetbrains">.</strong>Kon</span>
      </div>

      <div className="menu">
        <ul className="flex items-end gap-16 hover:">
          <li>
            <a href="#home">Home</a>
            <div className="indicador"></div>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
            <div className="indicador"></div>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
            <div className="indicador"></div>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
            <div className="indicador"></div>
          </li>
          <li>
            <a href="#contato">Contato</a>
            <div className="indicador"></div>
          </li>
        </ul>
      </div>

    </nav>

  );
}



export default MenuCima;

