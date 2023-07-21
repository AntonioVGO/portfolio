import { Header } from "./components/moleculis/Header.components";
import letrasImg from "./assets/img/letras.png"
import personaImg from "./assets/img/persona.png"
import cloudImg from "./assets/img/05.jpg"
import { Footer } from "./components/moleculis/Footer.components";

const App = () => {

  return (
    <>

      <div className="h-full w-full bg-gray-500 dark:bg-gray-800 flex flex-col justify-center">

        <Header />

        <main className="flex flex-col justify-center w-full mt-20">
          <section className="flex flex-row w-full justify-center items-center">
            <div className="flex justify-center w-6/12">
              <img className="w-10/12" src={letrasImg}></img>
            </div>

            <div className="flex justify-center w-6/12">
              <img className="w-4/12" src={personaImg}></img>
            </div>
          </section>

          <section className="mt-20 w-full flex-col">
            <div className="flex flex-row mt-20 w-full bg-white">
              <div className="w-7/12">
                <img src={cloudImg}></img>
              </div>
              <div className="flex items-center p-5 w-5/12 text-xs md:text-lg xl:text-2xl">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.</p>
              </div>
            </div>

            <div className="flex flex-row bg-white my-32">
              <div className="flex items-center p-5 w-5/12 text-xs md:text-lg xl:text-2xl">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem impedit consequatur rem debitis, eos quibusdam animi explicabo inventore ullam eligendi aliquam incidunt facilis cupiditate laboriosam fugiat tempora. Illum, cumque.</p>
              </div>
              <div className="w-7/12">
                <img src={cloudImg}></img>
              </div>
            </div>
          </section>
        </main>

        <Footer />

      </div>

    </>

  )
}

export default App
