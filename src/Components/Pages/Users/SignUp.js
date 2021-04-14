import React, { useState }  from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../../Styles/Modals.css';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

export default class SignUp extends React.Component{
 

    constructor(props){
        super(props);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.validar_contrasena = this.validar_contrasena.bind(this);                 
        this.state = {
              nombre: '',
              a_paterno: '',
              a_materno: '',
              correo: '',
              contrasena: '',
              clave_con: '',
              genero: '',
              telefono: '',
              isVerified: false,
              openSignUp: false


          }
      }

      validar_contrasena(e){
        e.preventDefault();
        var p1 = e.target.contrasena.value;
        var p2 = e.target.clave_con.value;
       
        if (p1 !== p2) {
          
         alert("Las contraseñas no coinciden");
      
        } else {
          if(this.state.isVerified){
            this.handleRegister(e);  
          }else{
            alert("Verifica el captcha");
          }
          
          }
      }    
  
      handleRegister(e){
          e.preventDefault();
          const datos = {
              nombre: e.target.nombre.value,
              a_paterno: e.target.a_paterno.value,
              a_materno: e.target.a_materno.value,
              email : e.target.email.value,
              clave: e.target.contrasena.value,
              clave_con: e.target.clave_con.value,
              telefono: e.target.telefono.value,
              genero: e.target.genero.value,
  
          };
  
          //axios para acceso a la api 
          
          axios.post('http://preview.innovacentre.com.mx/apirest/registrarse.php', datos).then(
              response => {
                console.log(response.data)
                if(response.data.length > 5){
                  console.log(response.data)
                  alert('Usuario registrado');
                }else{
                  alert("El email ya ha sido registrado, intenta con otro");
                } 
              }).catch(e =>{
                  alert('Ha ocurrido un error en el registro');
              });
      }
  


    valueToState = ({name, value}) => {
        this.setState( () =>{
            return {[name]: value};
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

    openModalSignUp = () =>{
        this.setState({openSignUp: !this.state.openSignUp})
    }
    render(){
        return(
            <>
                <div className="content-signup">
                    <Button className="btn-su"
                    style={{
                        backgroundColor: '#f0c508', 
                        color: '#000',  
                        position: "absolute", 
                        top: '50%', 
                        left: '50%', 
                        border: 'none', 
                        width: '150px', 
                        padding: '10px 24px'}} 
                        onClick={this.openModalSignUp}> Registrarme 
                    </Button>
                </div>

                <Modal isOpen={this.state.openSignUp}>
                <Form onSubmit={this.validar_contrasena}>
                    <ModalHeader> Registrarme </ModalHeader>
                    <ModalBody>  
                        <Form.Group controlId="nombre">
                            <Form.Control 
                            placeholder="Nombre" 
                            required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
                            onChange={event => this.valueToState(event.target)}  
                        />
                        </Form.Group>
                        <Form.Group controlId="a_paterno">
                            <Form.Control 
                                placeholder="Apellido Paterno" 
                                required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
                                onChange={event => this.valueToState(event.target)} 
                            />
                        </Form.Group>
                        <Form.Group controlId="a_materno">
                            <Form.Control 
                                placeholder="Apellido Materno" 
                                required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
                                onChange={event => this.valueToState(event.target)}  
                            />
                        </Form.Group>
                        <Form.Group  controlId="email">
                            <Form.Control 
                                type="email" 
                                placeholder="Correo electrónico" 
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required
                                onChange={event => this.valueToState(event.target)}
                            />
                        </Form.Group>    
                        <Form.Group controlId="contrasena">
                            <Form.Control 
                                type="password" 
                                placeholder="Contraseña" 
                                required pattern="^[a-zA-Z-ÿ\u00f1\u00d1]+(\s*[a-zA-Z-ÿ\u00f1\u00d1]*)*[a-zA-Z-ÿ\u00f1\u00d1]+${8,20}$"
                                onChange={event => this.valueToState(event.target)}  
                            />
                        </Form.Group>   
                        <Form.Group controlId="clave_con">
                            <Form.Control 
                                type="password" 
                                placeholder="Confirma tu contraseña" 
                                required pattern="^[a-zA-Z-ÿ\u00f1\u00d1]+(\s*[a-zA-Z-ÿ\u00f1\u00d1]*)*[a-zA-Z-ÿ\u00f1\u00d1]+${8,20}$"
                                onChange={event => this.valueToState(event.target)}  
                            />
                        </Form.Group>        
                        <Form.Group controlId="telefono">
                            <Form.Control 
                                placeholder="Teléfono celular" 
                                required pattern="^([0-9])*$"
                                onChange={event => this.valueToState(event.target)}
                            />
                        </Form.Group>    
                        <Form.Group controlId="genero">
                            <Form.Control as="select" defaultValue="Género">
                                <option> Género </option>
                                <option> Femenino </option>
                                <option> Masculino </option>
                                <option> Otro </option>
                                <option> Prefiero no decirlo </option>
                            </Form.Control>
                        </Form.Group>
                    <Recaptcha
                        sitekey="6LfLe-UZAAAAAET_rtZONdi6JU-0C1n_GBjH9-og"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                    />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" type="submit" value="Submit" > Registrarme </Button>
                        <Button onClick={this.openModalSignUp} color="warning"> Cancelar </Button>
                    </ModalFooter>
                    </Form>
                </Modal>
            </>
        )
    }
}


