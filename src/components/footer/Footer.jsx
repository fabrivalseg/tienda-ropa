import '../../styles/footer-styles/footer.css';

const Footer = () => {
    return (
        <footer className="container-footer">
            <div className='container-footer-links'>
                    <a href="#" className="footer-links">TERMINOS Y CONDICIONES</a>
                    <a href="#" className="footer-links">ACERCA DE</a>
                    <a href="#" className="footer-links">CONTACTATE</a>
                    <a href="#" className="footer-links">POLITICA DE COOKIES</a>
            </div>
            <div>
                <p className="footer-text">© 2021 Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;