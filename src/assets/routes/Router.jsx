import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import LandingApp from "../../pages/landing/LandingApp";
// En esta función se declaran las rutas de las páginas que vayamos a usar
export function Router() {
    return (
        <BrowserRouter>
            {/*ScrollToTop es una función jsx que hice para que el scroll se reinicie cada que se cambie de pagina */}
            <ScrollToTop />
            {/* Dentro del componente Routes se agregan las rutas*/}
            <Routes>
                {/* La ruta principal es LandingApp*/}
                <Route path="/" element={<LandingApp />} />
            </Routes>
        </BrowserRouter>
    );
}

