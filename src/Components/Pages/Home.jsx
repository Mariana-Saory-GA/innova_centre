import React from 'react';
import iso from '../../img/Logos/LOGO 2.1 A.png';
import './../Styles/Home.css';
import WhoAreWe from './whoAreWe';
import Services from './Services/services';
import Events from './Events/Events';
import Blog from './Blog/Blog';
import Carrusel from './Carrusel/carrusel';
import Widget from './widget/widget';
import ProfAvatar from './Users/ProfilePicture';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Sidebar from './Sidebar'; 
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import QuoteForm from './Users/QuoteForm';


function Home() {
    return (
        <div className="content-home">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <ProfAvatar/>
            <SignIn/>
            <SignUp/>
            <QuoteForm/>
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
            <Blog></Blog>
<<<<<<< HEAD
=======
            <Widget></Widget>
            <Carrusel></Carrusel>


           


            
>>>>>>> origin/master
            <MessengerCustomerChat pageId="1002978683130119" appId="442093927099752"/>
            <a
                href="https://wa.me/525574513963"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    )
}

export default Home 
