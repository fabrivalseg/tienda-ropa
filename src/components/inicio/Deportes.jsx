import { useNavigate } from 'react-router';
import '../../styles/inicio-styles/deportes.css';

const nuestrosDeportes = [{nombre: "futbol", imagen: "https://marcadegol.com/fotos//2015/01/Nike-Mercural-Superfly-IV-CR7-Rare-Gold.jpg"}, 
    {nombre: "tenis", imagen: "https://i.blogs.es/049541/dl_u504183_014/450_1000.jpeg"}, 
    {nombre: "basquet", imagen: "https://celadasa.vtexassets.com/arquivos/ids/399504-800-auto?v=638646927902530000&width=800&height=auto&aspect=true"}, 
    {nombre: "padel", imagen: "https://estaticos-cdn.prensaiberica.es/clip/380a9515-163e-4a30-822b-6b2041fd5b87_16-9-discover-aspect-ratio_default_0.webp"}];
const Deportes = () => {
    const navigate = useNavigate();
    return (
        <div className="container-deportes">
            {
                nuestrosDeportes.map((deporte, index) => {
                    return (
                        <div key={index} className="deporte" onClick={() => navigate(`/${deporte.nombre}`)}>
                            <img className="imagen-deporte" src={deporte.imagen} alt="deporte" />
                            <h3 className='nombre-deporte'>{deporte.nombre}</h3>
                        </div>
                )})
            }
        </div>
    )
}

export default Deportes;