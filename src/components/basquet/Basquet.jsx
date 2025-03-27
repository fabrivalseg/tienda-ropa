import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Grilla from "../grillaElementos/Grilla"
import { useState } from "react";
import { resultadoFilter } from "../grillaElementos/RealizarFiltro";

const basquetArray = [
    {nombre: "Remera Básquet Hombre 1", descripcion: "Remera de básquet para hombres", precio: 2500, url: "https://acdn.mitiendanube.com/stores/001/150/754/products/c56c993f-2e88-4f02-8f58-cb374847df1d1-b3e216820f31e1556416618993916548-480-0.jpeg"},
    {nombre: "Remera Básquet Hombre 2", descripcion: "Remera de básquet para hombres", precio: 2700, url: "https://http2.mlstatic.com/D_970587-MLA81516303535_122024-O.jpg"},
    {nombre: "Remera Básquet Mujer 1", descripcion: "Remera de básquet para mujeres", precio: 2600, url: "https://cbdeportes.com/wp-content/uploads/2023/08/james.lakers.violeta.front_.jpg"},
    {nombre: "Remera Básquet Niño 1", descripcion: "Remera de básquet para niños", precio: 2300, url: "https://cbdeportes.com/wp-content/uploads/2023/08/james.lakers.negro_.front_.jpg"},
    
    {nombre: "Pantalón Básquet Hombre 1", descripcion: "Pantalón de básquet para hombres", precio: 3500, url: "https://acdn.mitiendanube.com/stores/001/312/744/products/177-7cad90fe94d36e124e16960168247560-640-0.jpg"},
    {nombre: "Pantalón Básquet Hombre 2", descripcion: "Pantalón de básquet para hombres", precio: 3700, url: "https://http2.mlstatic.com/D_NQ_NP_857315-MLA71459646739_092023-O.webp"},
    {nombre: "Pantalón Básquet Mujer 1", descripcion: "Pantalón de básquet para mujeres", precio: 3300, url: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe2edec63/products/NIFB3967-608/NIFB3967-608-1.JPG"},
    {nombre: "Pantalón Básquet Niño 1", descripcion: "Pantalón de básquet para niños", precio: 3000, url: "https://images-cdn.ubuy.com.ar/6418214345f07b36873cdba0-chicago-style-bulls-basketball-shorts.jpg"},
    
    {nombre: "Zapatilla Básquet Hombre 1", descripcion: "Zapatilla de básquet para hombres", precio: 6000, url: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f9b9802/products/UA3026640-300/UA3026640-300-6.JPG"},
    {nombre: "Zapatilla Básquet Hombre 2", descripcion: "Zapatilla de básquet para hombres", precio: 6500, url: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f58d599/products/UA3026272-700/UA3026272-700-1.JPG"},
    {nombre: "Zapatilla Básquet Mujer 1", descripcion: "Zapatilla de básquet para mujeres", precio: 5800, url: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa55aaee4/products/NIDD9304-100/NIDD9304-100-6.JPG"},
    
    {nombre: "Bolso Básquet Hombre 1", descripcion: "Bolso de básquet para hombres", precio: 5000, url: "https://http2.mlstatic.com/D_NQ_NP_941659-MLA73662024729_122023-O.webp"},
    {nombre: "Bolso Básquet Mujer 1", descripcion: "Bolso de básquet para mujeres", precio: 5500, url: "https://http2.mlstatic.com/D_616019-MLU75288301979_032024-C.jpg"}
];


const Basquet = () => {
        const [mostrarPrecio, setMostrarPrecio] = useState(0);
        const [elementos, setElementos] = useState(basquetArray);
    
        const handleFilterChange = () => {
            const sexo = document.getElementById("sexo").value;
            const precio = document.getElementById("precio").value;
            const buscador = document.getElementById("buscador").value;
            resultadoFilter(sexo, precio, buscador, basquetArray, setMostrarPrecio, setElementos);
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

export default Basquet;