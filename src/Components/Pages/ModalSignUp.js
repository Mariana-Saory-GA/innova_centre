import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import { Form, Col, Row } from 'react-bootstrap';
import Signup from './../../img/Images/SignUp.svg'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(38, 7, 112, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    top: 0px;
`

const ModalWrapper = styled.div`
    width: 700px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    top: 10px;
`

const ModalImg = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: rgb(38, 7, 112, 0.9);
`


const ModalContent = styled.div`
    display: flex;
    position: relative;
    right: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p{
        margin-bottom: 1rem;
    }

    button{
        padding: 10px 24px;
        background: rgb(240, 197, 8);
        color: #000;
        border: none;
        border-radius: 4px;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    color: #260770;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const Modalsu = ({showModalSignup, setShowModalSignup}) => {
    const modalRef = useRef ()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModalSignup ? 1 : 0,
        transform: showModalSignup ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModalSignup(false)
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModalSignup){
            setShowModalSignup(false)
        }
    }, 
    [setShowModalSignup, showModalSignup]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, 
    [keyPress]
    );

    return(
        <>
            {showModalSignup ? (
                <Background>
                    <animated.div style={animation}>
                    <ModalWrapper showModalSignup={showModalSignup}>
                    <ModalImg src={Signup} alt='SignUp'/>
                        <ModalContent>
                            <h1> Registrarme </h1>
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
                            <button> Registrarme </button>
                        </ModalContent>
                        <CloseModalButton arial-label="Close modal" onClick={() => setShowModalSignup(prev => !prev)}/>
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}