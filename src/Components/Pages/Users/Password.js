import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../../Styles/Modals.css';

class Password extends React.Component{
    constructor(props){
        super(props);
        this.state={
            correo: '',
            openF: false
        }
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
                <Form>
                <Form.Group controlId="email">
                    <Label for="formEmailF"> 
                        Por favor ingresa la dirección de correo de tu cuenta de usuario y te enviaremos un correo para restablecer tu contraseña:  
                    </Label>
                    <Form.Control type="email" 
                        placeholder="Correo electrónico" 
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required
                    />
                </Form.Group>
                <Button color="warning"> Enviar </Button>
                <Button color="warning" onClick={this.openModalF} style={{margin: '10px'}}> Cancelar </Button>
                </Form>
            </ModalBody>
            </Modal>
        </>
        )
    }
}

export default Password