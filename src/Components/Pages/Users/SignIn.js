import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './../../Styles/Modals.css';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import PasswordF from './Password';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.validar_captcha = this.validar_captcha.bind(this);
        this.state = {
            correo: '',
            contrasena: '',
            isVerified: false,
            open: false,
            openF: false
        }
    }
    
    validar_captcha(e){
        e.preventDefault();
          if(this.state.isVerified){
            this.handleSignIn(e);  
          }else{
            alert("Verifica el captcha");
          }
          
          }
          handleSignIn(e){
            e.preventDefault();
            const datos = {
                email : e.target.email.value,
                clave: e.target.contrasena.value,
            };
            axios.post('https://innovacentre.com.mx/apirest/login.php', datos).then(
                    response => {
                        if(response.data['email'] !== undefined){
                          //const{jwt}=response
                          //return jwt
        
                          alert("Estas logueado");  
                          console.log("Estás logueado");
                          //window.location.href = ("/inicio");
                          //navigate ('/inicio');
                         
        
                          
                        }else{
                            alert("Usuario o contraeña incorrecta");
                            console.log("Credenciales inválidas");
                        }
                    }).catch(e =>{
                        alert('Ha ocurrido un error inesperado, intenta de nuevo :(');
                    });
          }

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

    valueToState = ({name, value}) => {
        this.setState( () =>{
            return {[name]: value};
        });
    }

    /* Modal de inicio de sesión */
    openModal = () =>{
        this.setState({open: !this.state.open})
    }

    /* Modal de recuperación de contraseña */
    openMondalF = () =>{
        this.setState({openF: !this.state.openF})
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
                <Button className="btn-si"
                style={
                    {backgroundColor: '#f0c508', 
                    color: '#000',  
                    position: "absolute", 
                    top: '50%', 
                    left: '50%',
                    border: 'none', 
                    width: '150px', 
                    padding: '10px 24px'}} 
                    onClick={this.openModal}> Iniciar sesión </Button>
            </div>

                <Modal isOpen={this.state.open}>
                <Form onSubmit={this.validar_captcha}>
                    <ModalHeader>
                        Iniciar sesión
                    </ModalHeader>
                    <ModalBody>
                        <Form.Group controlId="email">
                            <Label for="formEmail"> Correo: </Label>
                            <Form.Control type="email" 
                                placeholder="Correo electrónico" 
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required
                                onChange={(e) =>this.login.setEmail(e.target.value)} 
                                onChange={event => this.valueToState(event.target)}
                            />
                        </Form.Group>
                        <Form.Group controlId="contrasena">
                            <Label for="formPassword"> Contraseña: </Label>
                            <Form.Control type="password" 
                                placeholder="Contraseña" required
                                onChange={(e) =>this.login.setContrasena(e.target.value)} 
                                onChange={event => this.valueToState(event.target)} 
                            />
                            <PasswordF/>
                        </Form.Group>
                        <br/>
                        <Form.Check type="Checkbox" label="Recuérdame"/>
                            <div style={{position:"relative", right: "50px", top:"5px"}}>
                                <Recaptcha
                                    sitekey="6LfLe-UZAAAAAET_rtZONdi6JU-0C1n_GBjH9-og"
                                    render="explicit"
                                    onloadCallback={this.recaptchaLoaded}
                                    verifyCallback={this.verifyCallback}
                                />
                            </div>  
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
                    <ModalFooter class="py-1 ">
                        <Button color="warning" type="submit"> Iniciar sesión </Button>
                        <Button onClick={this.openModal} color="warning"> Cerrar </Button>
                    </ModalFooter>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default SignIn;
