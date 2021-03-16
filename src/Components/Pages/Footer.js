import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return(
        <div className="content-footer">
            <div className="footerC">
                <div className="row">

                    {/* Column1 */}

                    <div className="col1">
                        <h4> Llámanos </h4>
                        <ul className="list-unstyled">
                            <li> 55-60-89-65-93 </li>
                            <li> Innova Centre</li>
                            <li> CDMX </li>
                        </ul>
                    </div>

                    {/* Column2 */}

                    <div className="col2">
                        <h4> INNOVA CENTRE</h4>
                        <ul className="list-unstyled">
                            <li> Facebook </li>
                            <li> Instagram </li>
                            <li> YouTube </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Innova Centre | Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;