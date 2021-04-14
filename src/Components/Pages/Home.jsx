import React, {Component} from 'react';
import iso from '../../img/Logos/LOGO 2.1 A.png';
import './../Styles/Home.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Sidebar from './Sidebar'; 
import MenuMobile from './MenuMobile';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import QuoteForm from './Users/QuoteForm';

import Innova from '../../Video/videoInnova.mp4';
import VideoPlayer from 'react-video-js-player';

import Cds from './Events/CardsEvents';
import Event1 from './../../img/Images/Event1.webp';
import Event2 from './../../img/Images/Event2.webp';
import Event3 from './../../img/Images/Event3.webp';

import { ElfsightWidget } from 'react-elfsight-widget';

import Carousel from "react-elastic-carousel";
import Item from "./Carrusel/item";

import Footer from './Footer';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

class Home extends Component {
    render(){
        const videoSrc= Innova;
        return (
            <>
            {/* Menú para computadoras */}
            <Sidebar 
                pageWrapId={'page-wrap'} 
                outerContainerId={'outer-container'}
            />

            {/* Menú para dispositivos */}
            <MenuMobile
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
            />
            {/* Aquí tenemos la parte de los botones para Inicio de sesión, Registro y Formulario de cotización */}
            <SignIn/>
            <SignUp/>
            <QuoteForm/>
            {/* Aquí empieza la sección inicial de Home */}
                <section className="content-innova" id="home">
                    <div className="content-text">
                        <h1> INNOVA CENTRE <br/> SIEMPRE CONTIGO </h1>
                    </div>
                    <div className="content-img">
                        <img class="img-fluid" src={iso} className="brandIso"/>
                    </div>
                </section>           
                {/* Aquí se encuentra la segunda sección '¿Quiénes somos?' */}
                <section className="content-video" id="whoare">
                    <div className="content-who">
                        <h1> ¿Quiénes somos?</h1>
                    </div>
                    <div className="video-who">
                        <VideoPlayer 
                            src={videoSrc} 
                            width="1080" 
                            height="620" 
                            playbackRates={[0.5, 1, 3.85, 16]} 
                            className="repVideo"
                        />
                    </div>
                </section>
                {/* Aquí se encuentra la sección de 'Servicios' NOTA: Es temporal, necesita cambios */}
                <section className="content-services" id="services">
                    <div className="content-text-services">
                        <h1> Servicios </h1>
                    </div>
                    <div className="square-services">
                        <ul className="services">
                            <li className="op-serv"> Página Web </li>
                            <li className="op-serv"> Marketing Digital </li>
                            <li className="op-serv"> Ecommerce </li>
                        </ul>
                    </div>
                </section>
                {/* Aquí se encuentra la sección de 'Eventos' NOTA: Es temporal, necesita cambios */}
                <section className="content-events" id="events">
                    <div className="content-event-text">
                        <h1> Eventos </h1>
                    </div>
                    <div className='container-fluid d-flex justify-content-center'>
                        <div className='row mb-3'>
                            <div className='col-6 col-md-4 ml-auto theme-grid-col'>
                                <Cds 
                                    imgsrc={Event1} 
                                    title="Seguridad en los entornos multicloud" 
                                    text="[Descripción]"
                                />
                            </div>

                            <div className='col-6 col-md-4 ml-auto theme-grid-col'>
                                <Cds 
                                    imgsrc={Event2} 
                                    title="Servicios de infraestructura inteligente" 
                                    text="[Descripción]"
                                />
                            </div>
                    
                            <div className='col-6 col-md-4 ml-auto theme-grid-col'>
                                <Cds 
                                    imgsrc={Event3} 
                                    title="Inteligencia artificial y nube híbrida" 
                                    text="[Descripción]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Aquí se encuentra la sección de Facebook e Instagram */}
                <section className="content-widget" id="widget">
                    <div className="content-text-blog">
                        <h1> Recomendaciones </h1>
                    </div>
                    <div className="content-elfsight"> 
                        <ElfsightWidget 
                            widgetID="31eb6826-6355-4329-b51f-cc4114c589e6" 
                        />
                        <ElfsightWidget 
                            widgetID="ba3b713a-6461-4932-afa2-7fbdfc126935" 
                        />
                    </div>   
                </section>
                {/* Aquí se encuentra el carrusel de clientes */}
                <section className="content-carousel" id="clientes">
                    <div className="content-text-clients">
                        <h1> Principales clientes </h1>
                    </div>
                    <div className="content-carousel-clients">
                        <Carousel breakPoints={breakPoints}>
                            <Item className="img"/>
                            <Item className="img"/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </Carousel>
                    </div>
                </section>
                {/* Sección de WhatsApp y Messenger */}
                <MessengerCustomerChat 
                    pageId="1002978683130119"
                    appId="442093927099752"
                />
                <a
                    href="https://wa.me/525574513963"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                </a>
                <Footer/>
            </>
        )
    }
}
    
export default Home 
