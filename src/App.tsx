import { Header } from "./components/moleculis/Header.components";

const App = () => {

  return (
    <>

      <div className="h-full w-full bg-gray-800">

        <Header />

        <main className="flex flex-col justify-center w-full mt-20">
          <section className="flex flex-row w-full justify-center items-center">
            <div>
              <img className="w-full" src="https://i.ibb.co/f9gnmVP/letras.png"></img>
            </div>

            <div className="flex flex-col justify-end items-end w-96 px-20">
              <img className="w-80" src="https://i.ibb.co/WFKfGKS/persona.png"></img>
            </div>
          </section>

          <section className="mt-20 w-full h-full flex-row">
            <div className="flex mt-20 w-full bg-white">
              <img src="https://i.ibb.co/rcWdzkM/cloud-computing-00.jpg" className="w-7/12"></img>
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
              <img src="https://i.ibb.co/rcWdzkM/cloud-computing-00.jpg" className="w-7/12 "></img>
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
              <li><a href="#">FACEBOOK</a></li>
              <li><a href="#">INSTAGRAM</a></li>
              <li><a href="#">LINKEDIN</a></li>
            </ul>
          </nav>
        </footer>

      </div>
    </>

  )
}

export default App
