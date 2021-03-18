import React, {useState, useEffect} from 'react';
import LogoP from '../../../img/Logos/LOGO 2.1 B.png';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar} from  '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import {FaBars, FaTimes} from 'react-icons/fa';
import {AiOutlineArrowDown} from 'react-icons/ai';
import {Navbar} from 'react-bootstrap';
import {Link as Scroll} from 'react-scroll';


const useStyles = makeStyles ((theme)  => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    appbar: {
        background: "none",
        fontFamily: "Fjalla One",
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    icon: {
        color: "#fff",
        fontSize: "2rem",
    },
    titleKnow: {
        color: "#f5f5f8",
        fontFamily: "Fjalla One",
        fontSize: "2rem",
    },
    colorText: {
        color: "#F8DF27",
        fontFamily: "Fjalla One",
    },
    container: {
        textAlign: "center",
    },
    goDown: {
        color: "#F8DF27",
        fontSize: "2.5rem",
    },

}));



export default function Header(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar classname={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
            <Navbar.Brand href="/Home">
            <img class="img-fluid img" src={LogoP} alt="" height="130" width="130"/>
            </Navbar.Brand>
            </h1>
            <IconButton>
                <FaBars className={classes.icon} onClick={handleClick}/>
                <i className={click ? <FaBars/> : <FaTimes/>} />
            </IconButton>
            </Toolbar>
        </AppBar>

        <Collapse in={checked} {...(checked ? { timeout: 1000} : {})} collapsedHeight={5} >
        <div className={classes.container}>
            <h1 className={classes.titleKnow}> Conoce los paquetes de Página Web <br/> que <span className={classes.colorText}> Innova Centre </span> te ofrece.</h1>
            <Scroll to="service-pack" smooth={true}>
            <IconButton>
                <AiOutlineArrowDown className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    </div>
}