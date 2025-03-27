import Navbar from "../navbar/Navbar.jsx"
import Footer from "../footer/Footer"
import Grilla from "../grillaElementos/Grilla"
import { useState } from "react";
import { resultadoFilter } from "../grillaElementos/RealizarFiltro";

const padelArray = [{nombre: "Camiseta Pádel Hombre 1", descripcion: "Camiseta de pádel para hombres", precio: 2500, url: "https://http2.mlstatic.com/D_NQ_NP_606889-MLA50145177652_052022-O.webp"},
    {nombre: "Camiseta Pádel Hombre 2", descripcion: "Camiseta de pádel para hombres", precio: 2700, url: "https://acdn.mitiendanube.com/stores/002/050/152/products/811404_we-are-padel-t-shirt-men_wh_1-492971bc2aea0e0e9617133109900551-1024-1024.png"},
    {nombre: "Camiseta Pádel Mujer 1", descripcion: "Camiseta de pádel para mujeres", precio: 2600, url: "https://acdn.mitiendanube.com/stores/002/368/598/products/remera-frente-22254a0bf632e2bc4517163855660670-480-0.jpg"},
    {nombre: "Camiseta Pádel Niño 1", descripcion: "Camiseta de pádel para niños", precio: 2300, url: "https://http2.mlstatic.com/D_NQ_NP_819160-MLA74508144152_022024-O.webp"},
    
    {nombre: "Pantalón Pádel Hombre 1", descripcion: "Pantalón de pádel para hombres", precio: 3500, url: "https://acdn.mitiendanube.com/stores/001/391/095/products/recurso-287-d886d58eac26df069317097416782832-480-0.png"},
    {nombre: "Pantalón Pádel Hombre 2", descripcion: "Pantalón de pádel para hombres", precio: 3700, url: "https://http2.mlstatic.com/D_NQ_NP_854083-MLA50610793375_072022-O.webp"},
    {nombre: "Pantalón Pádel Mujer 1", descripcion: "Pantalón de pádel para mujeres", precio: 3300, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdxSB0obdAG4eBJ2wLWfje-_0or2WNotCLQ&s"},
    {nombre: "Pantalón Pádel Niño 1", descripcion: "Pantalón de pádel para niños", precio: 3000, url: "https://acdn.mitiendanube.com/stores/001/219/670/products/44649-01-9084aa4f11e36e8b1e17235620685003-1024-1024.jpg"},
    
    {nombre: "Zapatilla Pádel Hombre 1", descripcion: "Zapatilla de pádel para hombres", precio: 6000, url: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-de-padel-topper-gris-800010059564001-1.jpg"},
    {nombre: "Zapatilla Pádel Hombre 2", descripcion: "Zapatilla de pádel para hombres", precio: 6500, url: "https://acdn.mitiendanube.com/stores/001/408/700/products/zapatillas-wilson-k-padel-3-0-vermelho_preto-95a397da06a01d4a4517310731225728-1024-1024.jpg"},
    {nombre: "Zapatilla Pádel Mujer 1", descripcion: "Zapatilla de pádel para mujeres", precio: 5800, url: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-de-padel-asics-gel-challenger-14-clay-mujer-verde-13001042a254400-1.jpg"},
    
    {nombre: "Paleta de Pádel Hombre 1", descripcion: "Paleta de pádel para hombres", precio: 5000, url: "https://www.wilsonstore.com.ar/cdn/shop/files/WR175111F_0_BELA_PRO_V25_LE_ARGENTINA_RD-1200x1200.jpg?v=1715798305"},
    {nombre: "Paleta de Pádel Mujer 1", descripcion: "Paleta de pádel para mujeres", precio: 5500, url: "https://acdn.mitiendanube.com/stores/069/005/products/pala-drop-shot-furia-attack-c4bb718d9bd9ed9d4a17187373456581-1024-1024.jpg"}]



const Padel = () => {
    const [mostrarPrecio, setMostrarPrecio] = useState(0);
    const [elementos, setElementos] = useState(padelArray);

    const handleFilterChange = () => {
        const sexo = document.getElementById("sexo").value;
        const precio = document.getElementById("precio").value;
        const buscador = document.getElementById("buscador").value;
        resultadoFilter(sexo, precio, buscador, padelArray, setMostrarPrecio, setElementos);
    };
    
    return(
        <>
            <Navbar/>
            <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
                <div style={{flexGrow: 1}}>
                    <Grilla elementos={elementos} resultadoFilter={handleFilterChange} mostrarPrecio={mostrarPrecio}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Padel;