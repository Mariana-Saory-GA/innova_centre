import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../Styles/Sidebar.css';
import logo from '../../img/Logos/logo.png';
import {Navbar} from 'react-bootstrap';


export default props => {
    return(
        <>
        <div className="content-brand">
        <Navbar.Brand href="/Home">
            <img class="img-fluid img" src={logo} alt="" height="170" width="170" className="brandHome"/>
        </Navbar.Brand>
        </div>
        <div className="sidebar"> 
        <Menu>
            <a className="menu-item" href="/home"> Home </a>
            <a className="menu-item" href="/whoAreWe"> ¿Quiénes somos? </a>
            <a className="menu-item" href="/services"> Servicios </a>
            <a className="menu-item" href="/events"> Eventos </a>
            <a className="menu-item" href="/blog"> Blog </a>
            <a className="menu-item" href="/contactus"> Contáctanos</a>
        </Menu>
        </div>
        </>
    )
} 