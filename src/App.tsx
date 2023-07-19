import { Header } from "./components/moleculis/Header.components";
import letrasImg from "./assets/img/letras.png"
import personaImg from "./assets/img/persona.png"
import cloudImg from "./assets/img/05.jpg"

const App = () => {

  return (
    <>
      <div className="w-screen f-screen">
        <div className="h-full w-full bg-gray-800">

          <Header />

          <main className="flex flex-col justify-center w-full mt-20">
            <section className="flex flex-row w-full justify-center items-center">
              <div className="w-7/12">
                <img className="w-full" src={letrasImg}></img>
              </div>

              <div className="flex flex-col justify-end items-end w-96 px-20">
                <img className="w-full" src={personaImg}></img>
              </div>
            </section>

            <section className="mt-20 w-full h-full flex-row">
              <div className="flex mt-20 w-full bg-white">
                <img src={cloudImg} className="w-7/12"></img>
                <div className="flex items-center">
                  <p className="p-10 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.
                    <br></br><br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quae iure, dignissimos consequatur quo id fugit necessitatibus labore earum voluptas voluptatibus facilis officia, iusto aspernatur quasi porro modi sint similique.</p>
                </div>
              </div>

              <div className="w-full flex justify-end mt-40 mb-20 bg-white">
                <div className="flex items-center">
                  <p className="p-10 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.
                    <br></br><br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quae iure, dignissimos consequatur quo id fugit necessitatibus labore earum voluptas voluptatibus facilis officia, iusto aspernatur quasi porro modi sint similique.</p>
                </div>
                <img src={cloudImg} className="w-7/12 "></img>
              </div>
            </section>
          </main>

          <footer className="flex flex-row content-between w-full mt-10 px-5 py-3 bg-gray-900">
            <hr className=""></hr>
            <div className="flex flex-row w-full text-white  py-4 space-x-5">
              <p>© 2023 TOÑO VARGAS - TODOS LOS DERECHOS RESERVADOS</p>
            </div>

            <nav className="flex flex-col w-full py-4">
              <ul className="text-white flex flex-row gap-5 justify-end items-end pr-3">
                <li><a href="https://www.behance.net/tonovgo" target="_blank">BEHANCE</a></li>
                <li><a href="https://www.instagram.com/dago_rk/" target="_blank">INSTAGRAM</a></li>
                <li><a href="https://es.linkedin.com/in/tonovgo" target="_blank">LINKEDIN</a></li>
              </ul>
            </nav>
          </footer>

        </div>
      </div>
    </>

  )
}

export default App
