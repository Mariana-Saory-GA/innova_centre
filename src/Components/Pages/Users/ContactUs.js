import React from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import '../../Styles/ContactUs.css';
import FormContact from '../../../img/Images/FormContact.svg';
import {Form} from 'react-bootstrap';
import {Button} from 'reactstrap';
import Recaptcha from 'react-recaptcha';

class ContactUs extends React.Component{
    constructor(props){
        super(props);
        /* Captcha */
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        /* Axios */ 
        this.state = {
            nombre: '',
            empresa: '',
            email: '',
            telefono: '',
            servicio: '',
            mensaje: ''
        }
    }
    /* Sección de Axios */
    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response) => {
            if(response.data.status === 'success'){
                alert("Mensaje enviado");
                this.resetForm()
            } else if (response.data.status === 'fail'){
                alert("Error al enviar el mensaje")
            }
        })
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

    /* Sección para limpiar el formulario */
    resetForm(){
        this.setState({nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: ''})
    }
    render (){
        return(
            <>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <div className="content-form">
                <h1> ¡Contáctanos! </h1>
                <div className="form-contact">
                    <div className="image-contact">
                        <img class="img-fluid" src={FormContact} className="form-image"/>
                    </div>
                    <div className="form-fields">
                        <Form className="form-decoration" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Form.Group controlId="formName">
                                <Form.Control placeholder="Nombre*" id="nombre" value={this.state.nombre} onChange={this.onNameChange.bind(this)}/>
                            </Form.Group>
                            <Form.Group controlId="formCompany">
                                <Form.Control placeholder="Empresa" id="empresa" value={this.state.empresa} onChange={this.onCompanyChange.bind(this)}/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control placeholder="Correo electrónico*" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo con otras personas.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Control placeholder="Teléfono de contacto*" id="telefono" value={this.state.telefono} onChange={this.onPhoneChange.bind(this)}/>
                            </Form.Group>
                            <Form.Group controlId="formService">
                                <Form.Control as="select" defaultValue="Servicio" id="servicio" value={this.state.servicio} onChange={this.onServiceChange.bind(this)}>
                                    <option> Seleccione un servicio* </option>
                                    <option> Página Web </option>
                                    <option> Marketing Digital </option>
                                    <option> Ecommerce </option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label style={{color: "#6c757d"}}> Mensaje: </Form.Label>
                                <Form.Control as="textarea" rows={3} id="mensaje" value={this.state.mensaje} onChange={this.onMessageChange.bind(this)}/>
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
            </>
        );
    }

    onNameChange(event) {
        this.setState({nombre: event.target.value})
    }

    onCompanyChange(event) {
        this.setState({empresa: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneChange(event) {
        this.setState({telefono: event.target.value})
    }

    onServiceChange(event){
        this.setState({servicio: event.target.value})
    }

    onMessageChange(event){
        this.setState({mensaje: event.target.value})
    }
}
export default ContactUs