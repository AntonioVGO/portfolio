import { useNavigate } from "react-router-dom";
import { Button2 } from "../atom/button/Button2.components";
import { IconoTiempo } from "./IconoTiempo.components";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="flex flex-row content-between w-full p-2 bg-gray-900 ">
      <button onClick={() => navigate("/")} className="flex flex-row w-6/12 font-bold text-white p-4 space-x-5">
        <img className="w-14 h-14" src="https://i.ibb.co/R6VT33J/nombre.png"></img>
        <p className="py-4">TOÑO VARGAS</p>
      </button>

      <button onClick={() => navigate("/weather")} className="flex flex-row w-fit justify-center items-center">
        <IconoTiempo />
      </button>

      <nav className="flex flex-col w-full py-4">
        <ul className="text-white flex flex-row gap-5 font-bold justify-end items-end pr-3">
          <li><button onClick={() => navigate("/portfolio")}>PORTFOLIO</button></li>
          <li><button onClick={() => navigate("/about")}>SOBRE MÍ</button></li>
          <li><button onClick={() => navigate("/contacto")}>CONTACTO</button></li>
          <li className="ml-2 h-5/6"><Button2 text="LOGIN / REGISTRO" onClick={() => navigate("/login")} /></li>
        </ul>
      </nav>
    </header>
  )
}