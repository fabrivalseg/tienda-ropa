import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Grilla from "../grillaElementos/Grilla"
import { useState } from "react";
import { resultadoFilter } from "../grillaElementos/RealizarFiltro";

const futbolArray = [
    {nombre: "Camiseta Fútbol Hombre 1", descripcion: "Camiseta de fútbol para hombres", precio: 2500, url: "https://http2.mlstatic.com/D_NQ_NP_787127-MLA54010873076_022023-O.webp"},
    {nombre: "Camiseta Fútbol Hombre 2", descripcion: "Camiseta de fútbol para hombres", precio: 2700, url: "https://http2.mlstatic.com/D_NQ_NP_636906-MLA74095774602_012024-O.webp"},
    {nombre: "Camiseta Fútbol Mujer 1", descripcion: "Camiseta de fútbol para mujeres", precio: 2600, url: "https://templofutbol.vtexassets.com/arquivos/ids/19263382/IU1243-A.jpg?v=638593242104600000"},
    {nombre: "Camiseta Fútbol Niño 1", descripcion: "Camiseta de fútbol para niños", precio: 2300, url: "https://complex.com.ar/wp-content/uploads/2023/02/127.png"},
    
    {nombre: "Pantalón Fútbol Hombre 1", descripcion: "Pantalón de fútbol para hombres", precio: 3500, url: "https://http2.mlstatic.com/D_NQ_NP_678062-MLA45046711675_032021-O.webp"},
    {nombre: "Pantalón Fútbol Hombre 2", descripcion: "Pantalón de fútbol para hombres", precio: 3700, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATJ0uwIptldQEh0zLpYbgtjlLMcDIDSRj3g&s"},
    {nombre: "Pantalón Fútbol Mujer 1", descripcion: "Pantalón de fútbol para mujeres", precio: 3300, url: "https://http2.mlstatic.com/D_NQ_NP_622375-MLA41826851075_052020-O.webp"},
    {nombre: "Pantalón Fútbol Niño 1", descripcion: "Pantalón de fútbol para niños", precio: 3000, url: "https://acdn.mitiendanube.com/stores/001/949/620/products/screenshot_20220205-121957_instagram-969ef1cb80cdb91a1616440748768397-1024-1024.jpg"},
    
    {nombre: "Botines Fútbol Hombre 1", descripcion: "Botines de fútbol para hombres", precio: 6000, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIOKiC3u-alY9drEDXJcLe13m5SNy023HFg&s"},
    {nombre: "Botines Fútbol Hombre 2", descripcion: "Botines de fútbol para hombres", precio: 6500, url: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw509bcb95/products/PU107701-01/PU107701-01-2.JPG"},
    {nombre: "Botines Fútbol Mujer 1", descripcion: "Botines de fútbol para mujeres", precio: 5800, url: "https://acdn.mitiendanube.com/stores/001/332/272/products/whatsapp-image-2024-03-20-at-17-08-50-1-e382728c8a0804444a17109676048755-1024-1024.png"},
    
    {nombre: "Bolso Fútbol Hombre 1", descripcion: "Bolso de fútbol para hombres", precio: 5000, url: "https://http2.mlstatic.com/D_NQ_NP_903236-MLA52776776110_122022-O.webp"},
    {nombre: "Bolso Fútbol Mujer 1", descripcion: "Bolso de fútbol para mujeres", precio: 5500, url: "https://http2.mlstatic.com/D_NQ_NP_771117-MLU75915343800_042024-O.webp"}]


const Futbol = () => {
    const [mostrarPrecio, setMostrarPrecio] = useState(0);
    const [elementos, setElementos] = useState(futbolArray);

    const handleFilterChange = () => {
        const sexo = document.getElementById("sexo").value;
        const precio = document.getElementById("precio").value;
        const buscador = document.getElementById("buscador").value;
        resultadoFilter(sexo, precio, buscador, futbolArray, setMostrarPrecio, setElementos);
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

export default Futbol;