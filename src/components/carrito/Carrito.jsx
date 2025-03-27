/* eslint-disable react/prop-types */
import { CiShoppingTag } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../contextos/CarritoContext";
import { GrFormAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";
import { motion } from "framer-motion";

const Carrito = () => {
    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    const {carrito, setCarrito, total} = useContext(CarritoContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    useEffect(() => {
        setCantidadCarrito(carrito.length);
    }, [carrito]);

    const agregarAlCarrito = (elemento) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.map((item) => {
            if(item.elemento.nombre === elemento.elemento.nombre){
                item.cantidad += 1;
            }
        })
        setCarrito(nuevoCarrito);
    }

    const quitarDelCarrito = (elemento) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.map((item) => {
            if(item.elemento.nombre === elemento.elemento.nombre){
                item.cantidad -= 1;
                if(item.cantidad === 0){
                    const index = nuevoCarrito.indexOf(item);
                    nuevoCarrito.splice(index, 1);
                }
            }
        })
        setCarrito(nuevoCarrito);
    }

    const comprar = () => {}

    const limpiar = () => {
        setCarrito([]);
    }
    
    return (
        <div className={`container-carrito ${mostrarCarrito ? "activo" : ""}`}>
            <span onClick={() => setMostrarCarrito(true)}><CiShoppingTag className='carrito-icon'/></span>
            {cantidadCarrito > 0 && <motion.span
                                        key={cantidadCarrito}
                                        className="contador-carrito"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {cantidadCarrito}
                                    </motion.span>}

            <div className={`mostrar-carrito ${mostrarCarrito ? "activo" : ""}`}>
                <button className='boton-cerrar-carrito' onClick={() => setMostrarCarrito(false)}>X</button>
                {carrito.map((elemento, index) => {
                    return(
                        <div key={index} className="elemento-carrito">
                            <img src={elemento.elemento.url} alt={elemento.elemento.descripcion} className='imagen-carrito'/>
                            <h3 style={{color: "white", fontSize:"10px", textAlign: "center"}}>{elemento.elemento.nombre}</h3>
                            <h4 style={{color: "white", fontSize: "10px", marginTop: "-7px"}}>${elemento.elemento.precio}</h4>
                            <h4 style={{color: "white", fontSize: "10px", marginTop: "-7px"}}>Cantidad: {elemento.cantidad}</h4>
                            <div className='container-botones'>
                                <button onClick={() => agregarAlCarrito(elemento)} className='boton-mas'><GrFormAdd style={{fontSize: "15px", textAlign: "center"}}/></button>
                                <button className='boton-menos' onClick={() => quitarDelCarrito(elemento)}><IoMdRemove style={{fontSize: "15px", textAlign: "center"}}/></button>
                            </div>
                        </div>  )
                            }
                        )
                    }
                {carrito.length !== 0 &&
                <>
                    <h2 style={{color: "white", textAlign: "center", fontFamily: "revert", fontSize: "15px"}}>Total: ${total}</h2>
                    <div className="container-botones-carrito">
                        <button className="boton-comprar" onClick={() => comprar()}>Comprar</button>
                        <button className="boton-limpiar" onClick={() => limpiar()}>Limpiar</button>
                    </div> 
                </>
                }
                
            </div>
                        
        </div>
    )
}

export default Carrito;