/* eslint-disable react/prop-types */
import {useContext } from 'react';
import { CarritoContext } from '../../contextos/CarritoContext.jsx';
import '../../styles/grilla-styles/grilla.css';
import Filtros from './Filtros.jsx'
import GradientText from './GradientText.jsx';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';



const Grilla = ({elementos, resultadoFilter, mostrarPrecio}) => {
    const {setCarrito} = useContext(CarritoContext);

const agregarAlCarrito = (elemento) => {
    setCarrito(prevCarrito => {
        const existe = prevCarrito.some(item => item.elemento.nombre === elemento.nombre);

        if (existe) {
            return prevCarrito.map(item =>
                item.elemento.nombre === elemento.nombre
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
        } else {
            return [...prevCarrito, { elemento, cantidad: 1 }];
        }
    });
};



    return(
        <>  
            <div>
                <Filtros resultadoFilter={resultadoFilter} mostrarPrecio={mostrarPrecio}/>
            </div>
            <div className="container-elementos">
                {
                    elementos && elementos.map((elemento, index) => {
                        return(
                            <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            key={index} 
                            className="tarjeta-elemento">
                                <img src={elemento.url} alt={elemento.descripcion} className='imagen-grilla'/>  
                                <GradientText
                                colors={["#2C3E50", "#4CA1AF", "#2C3E50", "#4CA1AF", "#2C3E50"]}
                                animationSpeed={8}
                                showBorder={false}
                                className="custom-class"
                                >
                                {elemento.nombre}
                                </GradientText>
                                <h2 style={{fontSize: "18px"}}>${elemento.precio}</h2>
                                <h3 style={{fontFamily: "serif", fontSize: "16px"}}>{elemento.descripcion}</h3>
                                <button className='boton-cart' onClick={() => agregarAlCarrito(elemento)}>Agregar al Carrito</button>
                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Grilla;