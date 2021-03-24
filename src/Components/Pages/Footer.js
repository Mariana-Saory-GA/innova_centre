import React from 'react';
import '../Styles/Footer.css';
import {Navbar} from 'react-bootstrap';
import logo from '../../img/Logos/logo.png';
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="content-footer">
            <div className="content-brand-footer">
                <Navbar.Brand href="/Home">
                    <img class="img-fluid img" src={logo} alt="brandHome" height="100" width="100" className="brandHomeFooter"/>
                </Navbar.Brand>
            </div>
            <div className="social-media">
                <p className="findus"> Encuéntranos en nuestras redes sociales: </p>
            </div>
            <div className="content-social">
                <a href="https://www.facebook.com/innovacentre.latam/" target="_blank" rel="noopener noreferrer"> <FaFacebook/> </a>
                <a href="https://www.instagram.com/innovacentre/" target="_blank" rel="noopener noreferrer"> <FaInstagram/> </a>
                <a href="https://www.youtube.com/channel/UCC9WkXQZaImSIGTe0IyupOQ" target="_blank" rel="noopener noreferrer"> <FaYoutube/> </a>
                <a href="https://www.linkedin.com/company/innovacentre/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/> </a>
                <a Href="mailto:contacto@innovacentre.com.mx"> <FaEnvelope/> </a>
            </div>
            <div className="content-date">
                <p className="footer-date" >
                    &copy; {new Date().getFullYear()} Innova Centre | www.innovacentre.com.mx | Todos los derechos reservados
                </p>
            </div>
        </div>
    );
}

export default Footer;