import { useNavigate } from "react-router-dom";
import nombreImg from "../../assets/img/nombre.png"
import nombredarkImg from "../../assets/img/nombredark.png"
import { IconoTiempo } from "./IconoTiempo.components";
import { useState } from "react"; // import state

//import { Button2 } from "../atom/button/Button2.components";
//import { IconoTiempo } from "./IconoTiempo.components";

export const Header = () => {

  const navigate = useNavigate();

  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden(!hidden) 
    };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={nombredarkImg} className="h-8 mr-3 dark:hidden"/>
          <img src={nombreImg} className="h-8 mr-3 hidden dark:block"/>
          <span className="self-center text-DM font-semibold whitespace-nowrap dark:text-white">TOÑO VARGAS</span>
        </button>

        <button onClick={() => navigate("/weather")} className="flex flex-row w-fit justify-center items-center">
          <IconoTiempo />
        </button>
        
        <button onClick={toggleHidden} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
          </svg>
        </button>
        
        <div className={`${hidden ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => navigate("/portfol")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PORTFOLIO</button>
            </li>
            <li>
              <button onClick={() => navigate("/about")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SOBRE MÍ</button>
            </li>
            <li>
              <button onClick={() => navigate("/contacto")} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACTO</button>
            </li>
            <li>
              <button onClick={() => navigate("/login")} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
