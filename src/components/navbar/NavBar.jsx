import { useState, useEffect } from "react";
import "../../styles/navbar-styles/navbar.css";
import "../../styles/navbar-styles/carrito.css";
import { AiOutlineMenu } from "react-icons/ai";
import Carrito from "../carrito/Carrito";

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [mostrarIconoMenu, setMostrarIconoMenu] = useState(false);

    useEffect(() => {
        const manejarResize = () => {
            setMostrarIconoMenu(window.innerWidth <= 500);
        };

        manejarResize();
        window.addEventListener("resize", manejarResize);

        return () => {
            window.removeEventListener("resize", manejarResize);
        };
    }, []);

    return (
        <nav className="container-nav">
            <div className="container-img">
                <img
                    className="img-navbar"
                    src="https://static.vecteezy.com/system/resources/thumbnails/010/994/239/small_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
                    alt="Logo"
                />
            </div>

            {mostrarIconoMenu && (
                <button className="menu-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
                    <AiOutlineMenu size={30} color="white" />
                </button>
            )}

            <div className={`container-secciones ${menuAbierto ? "activo" : ""}`}>
                <a href="/" className="secciones">Inicio</a>
                <a href="/futbol" className="secciones">Futbol</a>
                <a href="/basquet" className="secciones">Basquet</a>
                <a href="/padel" className="secciones">Padel</a>
                <a href="/tenis" className="secciones">Tenis</a>
            </div>

            <Carrito />
        </nav>
    );
};

export default Navbar;
