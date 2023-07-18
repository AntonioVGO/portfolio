import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Login } from "../pages/Login/Login.page"
import { Registro } from "../pages/Registro/Registro.page"
import { Weather } from "../pages/Weather/Weather.page"
import { Error404 } from "../pages/404/Error404.page"


export default () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="*" element={<Error404 />} />

        </Routes>
    )
}
