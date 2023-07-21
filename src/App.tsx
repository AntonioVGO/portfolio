import { Header } from "./components/moleculis/Header.components";
import letrasImg from "./assets/img/letras.png"
import personaImg from "./assets/img/persona.png"
import cloudImg from "./assets/img/05.jpg"
import { Footer } from "./components/moleculis/Footer.components";

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
                <div className="flex items-center p-5 text-xs  md:text-lg xl:text-2xl">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.</p>
                </div>
              </div>

              <div className="w-full flex justify-end mt-40 mb-20 bg-white">
                <div className="flex items-center p-5 text-xs  md:text-lg xl:text-2xl">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.</p>
                </div>
                <img src={cloudImg} className="w-7/12 "></img>
              </div>
            </section>
          </main>

          <Footer />

        </div>
      </div>
    </>

  )
}

export default App
