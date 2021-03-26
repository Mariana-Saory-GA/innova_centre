import React from 'react';
import axios from 'axios';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Form} from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import 'bootstrap/dist/css/bootstrap.css';
import './../../Styles/QuoteForm.css';


class QuoteForm extends React.Component{
    constructor(props){
        super(props);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {

            /* Modal Quote Form */
            openQuoteForm: false,
            isVerified: false
        }
    }

    /* Captcha */   
    verifyCallback(response){
        if(response){
            this.setState({
                isVerified: true
            })
        }
    }
    
    recaptchaLoaded(){
        console.log('capcha success');
    }

    /* Modal */
    openModalQF = () =>{
        this.setState({openQuoteForm: !this.state.openQuoteForm})
    }
    
    render(){
        return(
            <>
            <div className="content-quoteform">
            <Button style={{
                backgroundColor: '#92238c', 
                color: '#fff',  
                position: "absolute", 
                top: '50%', 
                left: '50%',
                transform: "translate(-50%, -50%)", 
                border: 'none', 
                width: '150px', 
                padding: '8px 14px'}} 
                onClick={this.openModalQF}> ¡Cotiza con <br/> nosotros! 
            </Button>
            </div>

            <Modal isOpen={this.state.openQuoteForm}>
                <ModalHeader>
                    ¡Cotiza con nosotros!
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="form-email-qf">
                            <Form.Control placeholder="Correo electrónico*" id="email" />
                        </Form.Group>
                        <Form.Group className="form-name-qf">
                            <Form.Control placeholder="Nombre*" id="name"/>
                        </Form.Group>
                        <Form.Group className="form-phone-qf">
                            <Form.Control placeholder="Teléfono" id="phone"/>
                        </Form.Group>
                        <Form.Group className="form-company-qf">
                            <Form.Control placeholder="Empresa" id="company"/>
                        </Form.Group>
                        <Form.Group className="form-service-qf">
                            <Form.Label> Seleccione el servicio de su interés: </Form.Label>
                            <Form.Control as="select" defaultValue="service" id="service">
                                <option> Seleccione una opción* </option>
                                <option> Página Web </option>
                                <option> Marketing Digital </option>
                                <option> Ecommerce </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="form-desc">
                            <Form.Label> Descripción: </Form.Label>
                            <Form.Control as="textarea" rows={3} id="desc"/>
                        </Form.Group>
                            <Recaptcha
                                sitekey="6LfLe-UZAAAAAET_rtZONdi6JU-0C1n_GBjH9-og"
                                render="explicit"
                                onloadCallback={this.recaptchaLoaded}
                                verifyCallback={this.verifyCallback} />
                            <Button color="warning"> Enviar </Button>
                            <Button onClick={this.openModalQF} color="warning"> Cancelar </Button>
                            <Form.Text className="text-muted">
                                (*) Campos obligatorios.
                            </Form.Text>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    };
}

export default QuoteForm

