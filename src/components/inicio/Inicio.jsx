import Navbar from "../navbar/Navbar";
import '../../styles/inicio-styles/inicio.css';
import Deportes from "./Deportes";
import Footer from "../footer/Footer";
import BlurText from "./BlurText";
import TrueFocus from "./TrueFocus";

const inicio = () => {
    return (
        <>
            <Navbar />
            <div className="container-imagen">
                <img className="imagen-inicio" src="https://cdn.ofertitas.es/wp-content/uploads/chollo-sudadera-under-armour-ua-rival-fleece-capucha-hombre-verde.jpg" alt="imagen" />
            </div>
            <main className="container-main-inicio">
            <TrueFocus 
            sentence="Nuestros Deportes"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
                <Deportes />
            </main>
            <aside style={{width: "80%", margin: "auto", marginTop: "30px", marginBottom: "50px", textAlign: "center"}}>
            <BlurText
            title="Energía que Impulsa Tu Pasión"
            text="Llevamos innovación y calidad a cada paso, ofreciéndote productos diseñados para inspirar, potenciar y acompañarte en cada desafío. ¡Convierte tus metas en realidad con nosotros!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
            />
            </aside>
            <Footer />
        </>
    )
}

export default inicio;