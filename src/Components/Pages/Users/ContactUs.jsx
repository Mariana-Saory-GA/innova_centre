import React from 'react';
import Sidebar from './../Sidebar';
import '../../Styles/ContactUs.css';
import FormContact from '../../../img/Images/FormContact.svg';
import {Form} from 'react-bootstrap';
import {Button} from 'reactstrap';

function ContactUs(){
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
                    <Form className="form-decoration">
                        <Form.Group controlId="formName">
                            <Form.Control placeholder="Nombre"/>
                        </Form.Group>
                        <Form.Group controlId="formCompany">
                            <Form.Control placeholder="Empresa"/>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Control placeholder="Correo electrónico"/>
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu correo con otras personas.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Control placeholder="Teléfono de contacto"/>
                        </Form.Group>
                        <Form.Group controlId="formService">
                            <Form.Control as="select" defaultValue="Servicio">
                                <option> Seleccione un servicio </option>
                                <option> Página Web </option>
                                <option> Marketing Digital </option>
                                <option> Ecommerce </option>
                             </Form.Control>
                        </Form.Group>
                        <Button color="warning" className="btn-send"> Enviar </Button>
                    </Form>
                    
                </div>
            </div>
        </div>
        </>
    );
}
export default ContactUs