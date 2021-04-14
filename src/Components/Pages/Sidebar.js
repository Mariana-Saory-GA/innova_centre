import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../Styles/Sidebar.css';
import logo from '../../img/Logos/logo.png';
import {Navbar} from 'react-bootstrap';
import {AiFillMail} from 'react-icons/ai';
import {BiTable} from 'react-icons/bi';
import {BsQuestionDiamondFill} from 'react-icons/bs';
import {HiHome} from 'react-icons/hi';
import {IoIosPeople} from 'react-icons/io';
import {MdEvent} from 'react-icons/md';
import {RiChatHeartFill} from 'react-icons/ri';


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
            <a className="menu-item" href="Home#home"> <HiHome/> Home </a>
            <a className="menu-item" href="Home#whoare"> <BsQuestionDiamondFill/> ¿Quiénes somos? </a>
            <a className="menu-item" href="Home#services"> <BiTable/> Servicios </a>
            <a className="menu-item" href="Home#events"> <MdEvent/> Eventos </a>
            <a className="menu-item" href="Home#widget"> <RiChatHeartFill/> Recomendaciones </a>
            <a className="menu-item" href="Home#clientes"> <IoIosPeople/> Nuestros clientes </a>
            <a className="menu-item" href="/ContactUs"> <AiFillMail/> Contáctanos </a>
        </Menu>
        </div>
        </>
    )
} 