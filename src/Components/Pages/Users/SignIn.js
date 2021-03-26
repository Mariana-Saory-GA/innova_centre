import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './../../Styles/SignIn.css';

class SignIn extends React.Component{
    
    /* Sección del Modal */
    state = {
        open: false,
    }

    openModal = () =>{
        this.setState({open: !this.state.open})
    }
    render(){

    /* Google */
    const responseGoogle = (response) =>{
        console.log(response);
    };

    /* Facebook */

    const responseFacebook = (response) => {
        console.log("Nombre: " +response.name);
        console.log("Correo: " +response.email);
        console.log("Foto:" +response.picture.data.url);
    };
        return(
            <>
            <div className="content-signin">
                <Button style={{backgroundColor: '#f0c508', color: '#000',  position: "absolute", top: '50%', left: '50%',
                transform: "translate(-50%, -50%)", border: 'none', width: '150px', padding: '10px 24px'}} onClick={this.openModal}> Iniciar sesión </Button>
            </div>

                <Modal isOpen={this.state.open}>
                    <ModalHeader>
                        Iniciar sesión
                    </ModalHeader>
                    <ModalBody>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Label for="formEmail"> Correo: </Label>
                            <Form.Control type="email" placeholder="Correo electrónico"/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Label for="formPassword"> Contraseña: </Label>
                            <Form.Control type="password" placeholder="Contraseña"/>
                        </Form.Group>
                            <Form.Check type="Checkbox" label="Recuérdame"/>
                    </Form>
                    <p className="options-signin"> Inicia sesión con Facebook o Google </p>
                        <GoogleLogin
                            clientId="1093473912863-h49r37h0d3ed71d3o959fuvrn2ith96t.apps.googleusercontent.com"
                            buttonText="Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="signGoogle"/>
                        <FacebookLogin
                            appId="442093927099752"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            textButton=" Facebook"
                            icon="fa-facebook"
                            cssClass="iconFb" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning"> Iniciar sesión </Button>
                        <Button onClick={this.openModal} color="warning"> Cerrar </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default SignIn;