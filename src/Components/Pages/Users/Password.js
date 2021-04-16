import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../../Styles/Modals.css';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

class Password extends React.Component{
    constructor(props){
        super(props);
        this.handlePass = this.handlePass.bind(this);
        this.state={
            correo: '',
            openF: false
        }
    }

    handlePass(e){
        e.preventDefault();
        const datos = {
            email : e.target.email.value,
        };

        axios.post('https://innovacentre.com.mx/apirest/pass.php', datos).then(
                    response => {
                        if(response.data['email'] !== undefined){
                          alert("El correo de recuperación de contraseña se envio, revisa tu bandeja de spam");  
                          
                        }else{
                            alert("El correo no se encuentra registrado");
    
                        }
                    }).catch(e =>{
                        alert('Ha ocurrido un error inesperado, intenta de nuevo :(');
                    });
    }

    

    openModalF = () =>{
        this.setState({openF: !this.state.openF})
    }

    render(){
        return(
            <>
            <div className="content-pass">
            <Form.Text className="text-muted">
                <a onClick={this.openModalF} style={{cursor: "pointer"}}> Olvidé mi contraseña </a>
            </Form.Text>
            </div>
            <Modal isOpen={this.state.openF}>
                <ModalHeader>
                    Recuperar mi contraseña
                </ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handlePass}>
                <Form.Group controlId="email">
                    <Label for="formEmailF"> 
                        Por favor ingresa la dirección de correo de tu cuenta de usuario y te enviaremos un correo para restablecer tu contraseña:  
                    </Label>
                    <Form.Control type="email" 
                        placeholder="Correo electrónico" 
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required
                    />
                </Form.Group>

                
                <Button color="warning" type="submit"> Enviar </Button>
                <Button color="warning" onClick={this.openModalF} style={{margin: '10px'}}> Cancelar </Button>
                </Form>
            </ModalBody>
            </Modal>
        </>
        )
    }
}

export default Password
