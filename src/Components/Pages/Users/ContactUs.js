import React from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Sidebar from '../Sidebar';
import '../../Styles/ContactUs.css';
import FormContact from '../../../img/Images/FormContact.svg';
import {Form} from 'react-bootstrap';
import {Button} from 'reactstrap';
import Recaptcha from 'react-recaptcha';
import Footer from './../Footer';

class ContactUs extends React.Component{
    constructor(props){
        super(props);
        /* Captcha */
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        /* Enviar correo */
        this.sendEmail = this.sendEmail.bind(this);
        this.handleContact = this.handleContact.bind(this);
        /* Axios */ 
        this.state = {
            servicio: [],
            nombre: '',
            empresa: '',
            email: '',
            telefono: '',
            servicio: '',
            mensaje: '',
            isVerified: false
        }
    }
    /* Sección de Axios */
    componentDidMount(){
        axios.get(`https://innovacentre.com.mx/apirest/servicios.php`)
            .then(res => {
            const servicios = res.data;
            this.setState ({servicios});
            }
        )
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('ConnectInnova', 'template_hgnwhnf', e.target, 'user_mrxJmCM0ZgZCQVnEQupZl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    handleContact(e){
        if(this.state.isVerified){
            //php
            this.sendEmail(e);
            alert('Correo enviado')
        }else{
            alert('Error al enviar correo')
        }
    }
    /* Sección de Captcha */
    verifyCallback(response){
        if(response){
            this.setState({
                isVerified: true
            })
        }
    }
    
    recaptchaLoaded(){
        console.log('Captcha correcto');
    }

    render (){
        return(
            <>
            <Sidebar 
                pageWrapId={'page-wrap'} 
                outerContainerId={'outer-container'}
            />
            <div className="content-form">
                <h1> ¡Contáctanos! </h1>
                <div className="form-contact">
                    <div className="image-contact">
                        <img class="img-fluid" src={FormContact} className="form-image"/>
                    </div>
                    <div className="form-fields">
                        <Form className="form-decoration" onSubmit={this.handleContact}>
                            <Form.Group controlId="formName">
                                <Form.Control placeholder="Nombre*" id="nombre" required onChange={event => this.valueToState(event.target)}/>
                            </Form.Group>
                            <Form.Group controlId="formCompany">
                                <Form.Control placeholder="Empresa" id="empresa" onChange={event => this.valueToState(event.target)} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control placeholder="Correo electrónico*" id="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required onChange={event => this.valueToState(event.target)}/>
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo con otras personas.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Control placeholder="Teléfono de contacto*" id="telefono" pattern="^(0|[1-9][0-9]*)$" onChange={event => this.valueToState(event.target)}/>
                            </Form.Group>
                            <Form.Group controlId="formService">
                                <Form.Control as="select" defaultValue="Servicio" id="servicio" onChange={event => this.valueToState(event.target)}>
                                    <option> Seleccione un servicio* </option>
                                    <option> Página Web </option>
                                    <option> Marketing Digital </option>
                                    <option> Ecommerce </option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label style={{color: "#6c757d"}}> Mensaje: </Form.Label>
                                <Form.Control as="textarea" rows={3} id="mensaje" onChange={event => this.valueToState(event.target)}/>
                            </Form.Group>
                            <Recaptcha
                                sitekey="6LfLe-UZAAAAAET_rtZONdi6JU-0C1n_GBjH9-og"
                                render="explicit"
                                onloadCallback={this.recaptchaLoaded}
                                verifyCallback={this.verifyCallback}
                                />
                            <Button color="warning" className="btn-send"> Enviar </Button>
                            <Form.Text className="text-muted">
                                (*) Campos obligatorios.
                            </Form.Text>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        );
    }
}
export default ContactUs