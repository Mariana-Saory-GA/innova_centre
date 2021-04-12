import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../Styles/Sidebar.css';
import logo from '../../img/Logos/logo.png';
import {Navbar} from 'react-bootstrap';
import {AiFillHome, AiFillQuestionCircle, AiFillMail} from 'react-icons/ai';
import {BiTable} from 'react-icons/bi';
import {MdEvent} from 'react-icons/md';
import {CgNotes} from 'react-icons/cg';

export default props => {
    return(
        <>
        <div className="content-brand">
        <Navbar.Brand href="/Home">
            <img class="img-fluid img" src={logo} alt="logo-home" height="130" width="130" className="brandHome"/>
        </Navbar.Brand>
        </div>
        <div className="sidebar"> 
        <Menu>
            <a className="menu-item" alt="Home" href="/home"> <AiFillHome/> </a>
            <a className="menu-item" alt="¿Quiénes somos?" href="/whoAreWe"> <AiFillQuestionCircle/> </a>
            <a className="menu-item" alt= "Servicios" href="/services"> <BiTable/> </a>
            <a className="menu-item" alt="Eventos" href="/Events"> <MdEvent/> </a>
            <a className="menu-item" alt="Blog" href="/Blog"> <CgNotes/> </a>
            <a className="menu-item" alt="Contáctanos" href="/ContactUs"> <AiFillMail/> </a>
        </Menu>
        </div>
        </>
    )
} 