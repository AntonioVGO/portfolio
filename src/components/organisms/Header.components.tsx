import { useNavigate } from "react-router-dom";
import nombreImg from "../../assets/img/nombre.png"
import nombredarkImg from "../../assets/img/nombredark.png"// import state
import { ButtonTiempo } from "../atom/button/Buttontiempo.components";
import { NavMenu } from "../moleculis/NavMenu.components";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <main className="sticky top-0 bg-gray-300 border-gray-200 dark:bg-gray-900 px-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={nombredarkImg} className="h-8 mr-3 dark:hidden"/>
          <img src={nombreImg} className="h-8 mr-3 hidden dark:block"/>
          <span className="self-center text-DM font-semibold whitespace-nowrap dark:text-white">TOÑO VARGAS</span>
        </button>

        <ButtonTiempo/>
        
        <NavMenu text1="PORTFOLIO" text2="SOBRE MÍ" text3="CONTACTO"/>
        
      </div>
    </main>
  )
}
