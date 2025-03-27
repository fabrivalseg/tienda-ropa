import Navbar from "../navbar/NavBar.jsx"
import Footer from "../footer/Footer"
import Grilla from "../grillaElementos/Grilla";
import { useState } from "react";
import { resultadoFilter } from "../grillaElementos/RealizarFiltro";

const tenisArray = [
    {nombre: "Camiseta Tenis Hombre 1", descripcion: "Camiseta de tenis para hombres", precio: 2500, url: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2fd1fbe7/products/FIF11TN00196-3420/FIF11TN00196-3420-1.JPG"},
    {nombre: "Camiseta Tenis Mujer 1", descripcion: "Camiseta de tenis para mujeres", precio: 2600, url: "https://http2.mlstatic.com/D_NQ_NP_765174-MLA76714664113_052024-O.webp"},
    {nombre: "Camiseta Tenis Niño 1", descripcion: "Camiseta de tenis para niños", precio: 2300, url: "https://dcdn.mitiendanube.com/stores/213/643/products/13005-fr-011-2b937153652634c93e15122972232678-640-0.jpg"},
    
    {nombre: "Pantalón Tenis Hombre 1", descripcion: "Pantalón de tenis para hombres", precio: 3500, url: "https://http2.mlstatic.com/D_NQ_NP_848696-MLA32976550708_112019-O.webp"},
    {nombre: "Pantalón Tenis Mujer 1", descripcion: "Pantalón de tenis para mujeres", precio: 3300, url: "https://showsport.vtexassets.com/arquivos/ids/820677-800-auto?v=638574397816470000&width=800&height=auto&aspect=true"},
    
    {nombre: "Zapatilla Tenis Hombre 1", descripcion: "Zapatilla de tenis para hombres", precio: 6000, url: "https://www.wilsonstore.com.ar/cdn/shop/files/WRS328760_1_Kaos_Comp_3_Mens_Black_Ebony_WilsonRed-1200x1200.png?v=1694631204"},
    {nombre: "Zapatilla Tenis Mujer 1", descripcion: "Zapatilla de tenis para mujeres", precio: 5800, url: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-de-tenis-adidas-courtjam-control-3-blanca-100010if0459001-1.jpg"},

    {nombre: "Raqueta de Tenis Hombre 1", descripcion: "Raqueta de tenis para hombres", precio: 5000, url: "https://www.wilsonstore.com.ar/cdn/shop/files/WR149811U_0_Blade_98_16x19_V9_GR-1200x1200_1200x.jpg?v=1714677671"}
];

const Tenis = () => {

    const [mostrarPrecio, setMostrarPrecio] = useState(0);
    const [elementos, setElementos] = useState(tenisArray);

    const handleFilterChange = () => {
        const sexo = document.getElementById("sexo").value;
        const precio = document.getElementById("precio").value;
        const buscador = document.getElementById("buscador").value;
        resultadoFilter(sexo, precio, buscador, tenisArray, setMostrarPrecio, setElementos);
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

export default Tenis;