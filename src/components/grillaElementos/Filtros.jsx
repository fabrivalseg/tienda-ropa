/* eslint-disable react/prop-types */
import '../../styles/grilla-styles/filtros.css';
import { useState } from 'react';
import ShinyText from './ShinyText';
import { motion, AnimatePresence} from 'framer-motion';


const Filtros = ({resultadoFilter, mostrarPrecio}) => {
    const [ver, setVer] = useState(false);

    const verFiltros = () => {
        setVer(!ver);
    }



    

    return(
        <>
        <AnimatePresence>
            {ver ? 
            <motion.div className="visible" initial={{ opacity: 0, x: -300 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -300 }}>
            <aside className="filtros-container">
                <div>
                    <label htmlFor="sexo">Filtro: </label>
                    <select className='select-filtro' name="sexo" id="sexo" onChange={() => {resultadoFilter()}}>
                        <option value="todos">Todos</option>
                        <option value="hombres">Hombre</option>
                        <option value="mujeres">Mujer</option>
                        <option value="niños">Ñiños</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="precio">Precio: </label>
                    <input className='range-filtro' defaultValue={0} max={10000} type="range" onChange={() => {resultadoFilter()}} id='precio'/>
                    <span style={{color: "white"}}>${mostrarPrecio}</span>
                </div>
                <div>
                    <label htmlFor="buscador">Buscar: </label>
                    <input className='buscador-filtro' type="text" onChange={() => {resultadoFilter()}} id='buscador'/>
                </div>
            </aside>
        </motion.div> : null    
        }
            
        </AnimatePresence>
    
            <div className='container-boton-filtros'>
                <button className="boton-filtros" onClick={() => {verFiltros()}}><ShinyText text={ver ? "Cerrar Filtros" : "Abrir Filtros"} disabled={false} speed={2} className='custom-class' /></button>
            </div>
        </>
    )
}

export default Filtros;