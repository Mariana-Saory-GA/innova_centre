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
            <a className="menu-item" href="/home"> <AiFillHome/> Home </a>
            <a className="menu-item" href="/whoAreWe"> <AiFillQuestionCircle/> ¿Quiénes somos? </a>
            <a className="menu-item" href="/services"> <BiTable/> Servicios </a>
            <a className="menu-item" href="/Events"> <MdEvent/> Eventos </a>
            <a className="menu-item" href="/Blog"> <CgNotes/> Blog </a>
            <a className="menu-item" href="/ContactUs"> <AiFillMail/> Contáctanos </a>
        </Menu>
        </div>
        </>
    )
} 