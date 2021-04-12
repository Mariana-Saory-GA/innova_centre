import React from 'react';
import {bubble as Menu} from 'react-burger-menu';
import '../Styles/MenuMobile.css';
import logo from '../../img/Logos/logo.png';
import {Navbar} from 'react-bootstrap';
import {AiFillHome, AiFillQuestionCircle, AiFillMail} from 'react-icons/ai';
import {BiTable} from 'react-icons/bi';
import {MdEvent} from 'react-icons/md';
import {CgNotes} from 'react-icons/cg';

export default props => {
    return(
        <>
            <div className="menu-mobile">
                <Menu>
                <Navbar.Brand href="/Home">
                    <img class="img-fluid img" src={logo} alt="logo-home" height="130" width="130" className="brandHome"/>
                </Navbar.Brand>
                    <a className="menu-item" href="/Home"> <AiFillHome/> Home </a>
                    <a className="menu-item" href="/"> <AiFillQuestionCircle/> ¿Quiénes somos? </a>
                    <a className="menu-item" href="/"> <BiTable/> Servicios </a>
                    <a className="menu-item" href="/"> <MdEvent/> Eventos </a>
                    <a className="menu-item" href="/"> <CgNotes/> Blog </a>
                    <a className="menu-item" href="/"> <AiFillMail/> Contáctanos </a>
                </Menu>
            </div>
        </>
    )
}