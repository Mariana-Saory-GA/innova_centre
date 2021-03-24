import React, {Component} from 'react';
import '../../Styles/Events.css';
import Cds from './CardsEvents';
import Event1 from '../../../img/Images/Event1.webp';
import Event2 from '../../../img/Images/Event2.webp';
import Event3 from '../../../img/Images/Event3.webp';

 class Events extends Component {
     render(){
    return(
        <div>
            <section className="content-events">
                <div className="content-eventText">
                    <h1> Eventos </h1>
                </div>
            </section>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row mb-3'>
                    <div className='col-6 col-md-4 theme-grid-col'>
                        <Cds imgsrc={Event1} title="Seguridad en los entornos multicloud" text="[Descripción]"/>
                    </div>

                    <div className='col-6 col-md-4 theme-grid-col'>
                        <Cds imgsrc={Event2} title="Servicios de infraestructura inteligente" text="[Descripción]"/>
                    </div>
                    
                    <div className='col-6 col-md-4 theme-grid-col'>
                        <Cds imgsrc={Event3} title="Inteligencia artificial y nube híbrida" text="[Descripción]"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
 }
export default Events

