import React from "react";
import MenuCima from "../../components/menu/menuCima";
import "./home.css"
import InicialHome from "../../components/inicial/InicialHome"



const Home: React.FC = () => {
    return (
      <>
        <MenuCima />
        <InicialHome/>

      </>
    );
  };
  
  export default Home;