import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { Form } from 'react-bootstrap'
import Login from './../../img/Images/LogIn.svg'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import './../Styles/ModalSingIn.css'
import Recaptcha from 'react-recaptcha'

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
    width: 800px;
    height: 540px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    top: 30px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: rgb(38, 7, 112, 0.9);
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    h1{
        position: absolute;
        top: 40px;
    }

    Form{
        position: absolute;
        top: 120px;
    }

    p{
        margin-bottom: 1rem;
        position: relative;
        top: 90px;
    }
    button{
        padding: 8px 22px;
        background: rgb(240, 197, 8);
        color: #000;
        border: none;
        border-radius: 4px;
        position: relative;
        top: 80px;
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

export const Modal = ({showModalSignin, setShowModalSignin}) => {
    const modalRef = useRef ()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModalSignin ? 1 : 0,
        transform: showModalSignin ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModalSignin(false)
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModalSignin){
            setShowModalSignin(false)
        }
    }, 
    [setShowModalSignin, showModalSignin]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, 
    [keyPress]
    );

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
    {showModalSignin ? (
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper showModalSignin={showModalSignin}>
                <ModalImg src={Login} alt='logIn'/>
                <ModalContent>
                <h1> Iniciar sesión </h1>
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Control type="email" placeholder="Correo electrónico"/>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Control type="password" placeholder="Contraseña"/>
                                </Form.Group>
                                <Form.Check type="Checkbox" label="Recuérdame"/>
                            </Form>
                            <button> Iniciar sesión </button>
                            <p> Inicia sesión con Facebook o Google</p>
                            <GoogleLogin
                                clientId="1093473912863-h49r37h0d3ed71d3o959fuvrn2ith96t.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}/>
                            <FacebookLogin
                                appId="442093927099752"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                textButton=" Facebook"
                                icon="fa-facebook"
                                cssClass="iconFb" />
                </ModalContent>
                <CloseModalButton aria-label="Close modal" onClick={() => setShowModalSignin(prev => !prev)}/>
            </ModalWrapper>
            </animated.div>
        </Background>
    ) : null}
    </>
    )
};