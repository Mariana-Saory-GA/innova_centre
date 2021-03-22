import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../../Styles/SignUp.css';

class SignUp extends React.Component{
    state = {
        openSignUp: false,
    }

    openModalSignUp = () =>{
        this.setState({openSignUp: !this.state.openSignUp})
    }
    render(){
        return(
            <>
                <div className="content-signup">
                    <Button style={{backgroundColor: '#f0c508', color: '#000',  position: "absolute", top: '50%', left: '50%',
                    transform: "translate(-50%, -50%)", border: 'none', width: '150px', padding: '10px 24px'}} onClick={this.openModalSignUp}> Registrarme </Button>
                </div>

                <Modal isOpen={this.state.openSignUp}>
                    <ModalHeader> Registrarme </ModalHeader>
                    <ModalBody>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Control placeholder="Nombre (s) *"/>
                        </Form.Group>
                            <Row>
                                <Col>
                                <Form.Group controlId="formLastP">
                                    <Form.Control placeholder="Apellido paterno *"/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="formLastM">
                                    <Form.Control placeholder="Apellido materno *"/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formEmail">
                                <Form.Control placeholder="Correo electrónico *"/>
                            </Form.Group>
                            <Row>
                                <Col>
                                <Form.Group controlId="formPassword">
                                    <Form.Control placeholder="Contraseña *"/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="formPasswordConf">
                                    <Form.Control placeholder="Confirmar contraseña *"/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formPhone">
                                        <Form.Control placeholder="Teléfono celular"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGender">
                                        <Form.Control as="select" defaultValue="Género">
                                            <option> Género </option>
                                            <option> Femenino </option>
                                            <option> Masculino </option>
                                            <option> Otro </option>
                                            <option> Prefiero no decirlo </option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning"> Registrarme </Button>
                        <Button onClick={this.openModalSignUp} color="warning"> Cancelar </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default SignUp;
