import { Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import { Login } from "../pages/Login/Login.page"
import { Registro } from "../pages/Registro/Registro.page"
import { Weather } from "../pages/Weather/Weather.page"
import { Error404 } from "../pages/404/Error404.page"
import { Portfolio } from "../pages/Portfolio/Portfolio.page"
import { About } from "../pages/About/About.page"
import { Contacto } from "../pages/Contacto/Contacto.page"
import { ProtectedRoutes } from "./Protected.routes"


export default () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path={"/portfolio"} element={<Navigate to ={"/"}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/weather" element={<Weather />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}
