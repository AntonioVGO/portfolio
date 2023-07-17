import { useNavigate } from "react-router-dom";
import { Button2 } from "./components/atom/button/Button2.components"

const App = () => {

  const navigate = useNavigate();

  return (
    <>

      <div className="h-full w-full bg-gray-800">

        <header className="flex flex-row content-between w-full p-10">
          <div className="flex flex-row w-full font-bold text-white  space-x-5">
            <img className="w-14 h-14" src="https://i.ibb.co/R6VT33J/nombre.png"></img>
            <p className="py-4">TOÑO VARGAS</p>
          </div>
          <nav className="flex flex-col w-full py-4">
            <ul className="text-white flex flex-row gap-5 font-bold justify-end items-end pr-3">
              <li><a href="#">PORTFOLIO</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><Button2 text="LOGIN" onClick={()=> navigate("/login")} /></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col justify-center w-full">
          <div className="flex flex-row w-full justify-center items-center">
            <div>
              <img className="w-full" src="https://i.ibb.co/f9gnmVP/letras.png"></img>
            </div>

            <div className="flex flex-col justify-end items-end w-96 px-20">
              <img className="w-80" src="https://i.ibb.co/WFKfGKS/persona.png"></img>
            </div>

          </div>

          <div className="w-full">
            <img src="https://i.ibb.co/rcWdzkM/cloud-computing-00.jpg" className="w-8/12"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/M7MB065/20191113-Design-Thinking.jpg"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/M7MB065/20191113-Design-Thinking.jpg"></img>
          </div>

        </main>

      </div>
    </>

  )
}

export default App
