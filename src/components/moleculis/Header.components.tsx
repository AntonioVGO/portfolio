import { useNavigate } from "react-router-dom";
import nombreImg from "../../assets/img/nombre.png"
//import { Button2 } from "../atom/button/Button2.components";
//import { IconoTiempo } from "./IconoTiempo.components";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={nombreImg} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Toño Vargas</span>
        </button>
        <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
          </svg>
        </button>
        <div className="w-full md:block md:w-auto hidden">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => navigate("/")} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/portfol")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PORTFOLIO</button>
            </li>
            <li>
              <button onClick={() => navigate("/about")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SOBRE MÍ</button>
            </li>
            <li>
              <button onClick={() => navigate("/contacto")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACTO</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

{/*<header className="flex flex-row content-between w-full h-32 p-2 bg-gray-900 justify-center items-center">
        <button onClick={() => navigate("/")} className="flex flex-row w-6/12 min-w-[15%] font-bold text-white p-4 space-x-5 justify-start items-center">
          <img className="w-14" src="https://i.ibb.co/R6VT33J/nombre.png"></img>
          <p className="py-4 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg">TOÑO VARGAS</p>
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
}*/}
