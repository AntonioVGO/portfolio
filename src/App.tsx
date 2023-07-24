import letrasImg from "./assets/img/letras.png"
import letrasdarkImg from "./assets/img/letrasdark.png"
import personaImg from "./assets/img/persona.png"
import personadarkImg from "./assets/img/personadark.png"
import cloudImg from "./assets/img/05.jpg"
import Layout from "./components/layout/Layout";
import { TempImgImg } from "./components/templates/TempImgImg.components"
import { TempTxtImg } from "./components/templates/TempTxtImg.components"
import { TempImgTxt } from "./components/templates/TempImgTxt.components"


const App = () => {

  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-800 flex flex-col justify-center">

          <main className="flex flex-col justify-center w-full mt-20">
            
            <TempImgImg img1={letrasImg} img2={letrasdarkImg} img3={personadarkImg} img4={personaImg}/>

            <section className="w-full flex-col">
              
              <TempImgTxt img={cloudImg} text="Programador junior fullstack: SQL, Java, Javascript, React, HTML, CSS"/>

              <TempTxtImg img={cloudImg} text="Diseño gráfico: Adobe Photoshop, Adobe Illustrator, Adobe Indesign"/>

            </section>
          </main>

        </div>
      </Layout>
    </>

  )
}

export default App
