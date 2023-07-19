import { useNavigate } from "react-router-dom";
import { Button2 } from "../atom/button/Button2.components";
import { IconoTiempo } from "./IconoTiempo.components";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="flex flex-row content-between w-full p-2 bg-gray-900 justify-center items-center">
      <button onClick={() => navigate("/")} className="flex flex-row w-6/12 min-w-[15%] font-bold text-white p-4 space-x-5 justify-start items-center">
        <img className="w-14 h-14" src="https://i.ibb.co/R6VT33J/nombre.png"></img>
        <p className="py-4 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg">TOÑO VARGAS</p>
      </button>

      <button onClick={() => navigate("/weather")} className="flex flex-row w-fit justify-center items-center">
        <IconoTiempo />
      </button>

      <nav className="flex-row invisible md:visible w-full py-4 justify-end items-center mr-5">
        <ul className="text-white flex flex-row gap-5 font-bold justify-center items-center pr-3">
          <li><button className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg" onClick={() => navigate("/portfol")}>PORTFOLIO</button></li>
          <li><button className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg" onClick={() => navigate("/about")}>SOBRE MÍ</button></li>
          <li><button className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg" onClick={() => navigate("/contacto")}>CONTACTO</button></li>
          <li className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-l ml-2 h-5/6"><Button2 text="LOGIN / REGISTRO" onClick={() => navigate("/login")} /></li>
        </ul>
      </nav>

      <button data-collapse-toggle="navbar-hamburger" type="button" className="mr-5 md:hidden inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>



    </header>
  )
}