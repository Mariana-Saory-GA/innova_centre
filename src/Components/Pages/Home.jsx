import React, {useState} from 'react';
import iso from '../../img/Logos/LOGO 2.1 A.png';
import './../Styles/Home.css';
import WhoAreWe from './whoAreWe';
import Services from './Services/services';
import Events from './Events/Events';
import styled from 'styled-components';
import {Modal} from './Users/ModalSignIn';
import {Modalsu} from './Users/ModalSignUp';
import ProfAvatar from './Users/ProfilePicture';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Sidebar from './Sidebar'; 

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background: rgb(240, 197, 8);
    color: #000;
    font-size: 18px;
    cursor: pointer;
    position: fixed;
    right: 200px;
    top: 10px;
    z-index: 10;
`

const Buttonup = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background: rgb(240, 197, 8);
    color: #000;
    font-size: 18px;
    cursor: pointer;
    position: fixed;
    right: 50px;
    top: 10px;
    z-index: 10;
`

function Home() {
    const [showModalSignin, setShowModalSignin] = useState(false)

    const openModal = () =>{
        setShowModalSignin(prev => !prev)
    }

    const [showModalSignup, setShowModalSignup] = useState(false)

    const openModalSU = () =>{
        setShowModalSignup(prev => !prev)
    }
    return (
        <div className="content-home">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <ProfAvatar/>
            <Container>
            <Button onClick={openModal}> Iniciar sesión </Button>
            <Modal showModalSignin={showModalSignin} setShowModalSignin={setShowModalSignin}/>
            </Container>

            <Container>
                <Buttonup onClick={openModalSU}> Registrarme </Buttonup>
                <Modalsu showModalSignup={showModalSignup} setShowModalSignup={setShowModalSignup}/>
            </Container>
            <section className="content-innova">
                <div className="content-text">
                    <h1> INNOVA CENTRE <br/> SIEMPRE CONTIGO </h1>
                </div>
                <div className="content-img">
                    <img class="img-fluid" src={iso} className="brandIso"/>
                </div>
            </section>
            <WhoAreWe></WhoAreWe>
            <Services></Services>
            <Events></Events>
            <MessengerCustomerChat pageId="1002978683130119" appId="442093927099752"/>
            <a
                href="https://wa.me/525560896293"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer">
            <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    )
}

export default Home 
