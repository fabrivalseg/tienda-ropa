
import { BrowserRouter, Route, Routes } from "react-router"
import Tenis from "./components/tenis/Tenis";
import Padel from "./components/padel/Padel";
import Basquet from "./components/basquet/Basquet";
import Futbol from "./components/futbol/Futbol";
import Inicio from "./components/inicio/Inicio";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/futbol" element={<Futbol />} />
                <Route path="/basquet" element={<Basquet />} />
                <Route path="/padel" element={<Padel />} />
                <Route path="/tenis" element={<Tenis />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;