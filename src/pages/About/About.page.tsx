import Layout from "../../components/layout/Layout"

export const About = () => {
    return (
        <>
            <Layout>
                <div className="flex flex-col w-screen h-screen pt-20 items-center bg-gray-200 dark:bg-gray-800">
                    <article className="prose w-96 h-fit bg-white flex flex-col p-10 dark:bg-white shadow-xl">
                        <h2 className="flex justify-center font-bold">SOBRE MÍ</h2>
                        <p className="pt-5 text-justify">Estudié arquitectura técnica por cercanía, pero siempre he estado más interesado en las artes
                            gráficas, en las que he ido, y sigo, autoformándome.
                            Actualmente estoy formándome en programación, tanto en backend como en frontend, manejando varios lenguajes.
                            Poseo gran capacidad de asimilación de conceptos y adaptación a nuevos métodos de trabajo.
                            Apuesto por desarrollar mi trabajo en Extremadura. Posibilidad de home-working para el resto del mundo.
                        </p>
                    </article>
                </div>
            </Layout>
        </>
    )
}