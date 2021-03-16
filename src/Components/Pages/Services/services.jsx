import React, {useState} from 'react';
import './../../Styles/services.css';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Ecom from './../../../img/Images/Ecom.svg';
import MD from './../../../img/Images/MarketingDigital.svg';
import PW from './../../../img/Images/PaginaWeb.svg';


const useStyles= makeStyles((theme) => ({
   grid: {
       width: '100%',
       margin: '0px',
       position:'absolute',
       
   },
   gridN: {
    width: '100%',
    margin: '0px',
    position:'absolute',
    zIndex: -1,
    },
   grid2: {
    width: '100%',
    margin: '0px',
    position:'absolute',
    top: '14.2%',
    },
    grid2N: {
        width: '100%',
        margin: '0px',
        position: 'absolute',
        top: '14.2%',
        zIndex: -1,
    },
    grid3: {
        width: '100%',
        margin: '0px',
        position:'absolute',
        top: '28.4%',
    },
    grid3N: {
        width: '100%',
        margin: '0px',
        position:'absolute',
        top: '28.4%',
        zIndex: -1,
    },
    grid4:{
        width: '100%',
        margin: '0px',
        position: 'absolute',
        top: '0.9%',
        left: '24.8%'
    },
   paper: {
       padding: theme.spacing(2),
       textAlign: 'center',
       color: 'darkyellow',
       background: 'rgb(240, 197, 8)',
   },
   paperN: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'darkyellow',
    background: 'rgb(229, 196, 46)',
},
   paperCont: {
       padding: theme.spacing(2),
       background: 'rgb(245, 243, 234)',
   },

   /* Servicios */
   image: {
       width: 250,
       height: 250,
       position: 'absolute',
       left: '180px',
       top: '150px',
   },
   img: {
       margin: 'auto',
       display: 'block',
       maxWidth: '100%',
       maxHeight: '100%',
   },
   gridPW:{
       width: '100%',
       margin: '0px',
       position: 'absolute',
       top: '0.9%',
       left: '21%',
       zIndex: 10,
    },
    gridMD:{
        width: '100%',
        margin: '0px',
        position: 'absolute',
        top: '0.9%',
        left: '21%',
        zIndex: 10,
     },
     gridE:{
        width: '100%',
        margin: '0px',
        position: 'absolute',
        top: '0.9%',
        left: '21%',
        zIndex: 10,
     },
    textTitle: {
        position: 'absolute',
        top: '20px',
        left: '200px',
        color: '#290871',
    },
    textInfo: {
        position: 'absolute',
        top: '100px',
        left: '70px',
        color: '#290871',
        textAlign: 'center',
    },
    buttonLanding: {
        position: 'absolute',
        top: '405px',
        left: '280px',
    }
}));

export default function Services() {
    const classes = useStyles();

    const [isOn, setOn] = useState(false);
    const [isOn2, setOn2] = useState(false);
    const [isOn3, setOn3] = useState(false);

    /* Página Web */
    const clickHandler= () => {
        setOn((lastState)=>!lastState)
    }

    const animation = useSpring({
        "backgroundColor":isOn?1:0, opacity:isOn?1:0,
    })

    /* Marketing Digital */
    const clickHandlerM = () => {
        setOn2((lastState)=>!lastState)
    }
    const animationM = useSpring({
        "backgroundColor": isOn2?0:1, opacity: isOn2?1:0,
    })

    /* Ecommerce */
    const clickHandlerE = () => {
        setOn3((lastState) => ! lastState)
    }
    const animationE = useSpring({
        "backgroundColor": isOn3?0:1, opacity: isOn3?1:0,
    })
 
    return(
        <>
        <section className="content-service">
            <div className="content-servTit">
                <h1> Nuestros servicios </h1>
            </div>
            {/* Página Web */}
            <div className="tableServ">
            <animated.div style={animation} onClick={clickHandler}>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paper}> <br/><br/> Página Web <br/><br/><br/> </Paper>
                </Grid>
            </Grid>
            </animated.div>

            <Grid container spacing={2} className={classes.gridN}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paperN}> <br/><br/> Página Web <br/><br/><br/> </Paper>
                </Grid>
            </Grid>

            <animated.div style={animation} onClick={isOn}>
            <Grid container spacing={1} className={classes.gridPW}>
                <Grid items xs={8} md={6}>
                    <div className={classes.textTitle}>
                        <Typography gutterBottom variant="h3"> Página Web </Typography>
                    </div>
                    <div className={classes.textInfo}>
                        <Typography gutterBottom variant="h5"> Creamos tu página web a la medida de tu negocio. <br/> ¡Deja que el mundo te conozca! </Typography>
                    </div>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={PW}/>
                    </ButtonBase>
                    <div className={classes.buttonLanding}>
                    <Button variant="contained" color="primary" href="/WebPage" disableElevation>
                        ¡Ver más!
                    </Button>
                    </div>
                </Grid>
            </Grid>
            </animated.div>

            {/* Marketing Digital */}
            <animated.div style={animationM} onClick={clickHandlerM}>
            <Grid container spacing={2} className={classes.grid2}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paper}> <br/><br/> Marketing Digital <br/><br/><br/> </Paper>
                </Grid>
            </Grid>
            </animated.div>

            <Grid container spacing={2} className={classes.grid2N}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paperN}> <br/><br/> Marketing Digital <br/><br/><br/> </Paper>
                </Grid>
            </Grid>

            <animated.div style={animationM} onClick={isOn2}>
            <Grid container spacing={1} className={classes.gridMD}>
                <Grid items xs={8} md={6}>
                    <div className={classes.textTitle}>
                        <Typography gutterBottom variant="h3"> Marketing Digital </Typography>
                    </div>
                    <div className={classes.textInfo}>
                        <Typography gutterBottom variant="h5"> [Descripción]</Typography>
                    </div>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={MD}/>
                    </ButtonBase>
                    <div className={classes.buttonLanding}>
                    <Button variant="contained" color="primary" href="/DigitalMarketing" disableElevation >
                        ¡Ver más!
                    </Button>
                    </div>
                </Grid>
            </Grid>
            </animated.div>

            {/* Ecommerce */}
            <animated.div style={animationE} onClick={clickHandlerE}>
            <Grid container spacing={2} className={classes.grid3}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paper}> <br/> <br/> Ecommerce <br/><br/><br/> </Paper>
                </Grid>
            </Grid>
            </animated.div>

            <Grid container spacing={2} className={classes.grid3N}>
                <Grid item xs={4} md={3}>
                    <Paper className={classes.paperN}> <br/> <br/> Ecommerce <br/><br/><br/> </Paper>
                </Grid>
            </Grid>

            <animated.div style={animationE} onClick={isOn3}>
            <Grid container spacing={1} className={classes.gridE}>
                <Grid items xs={8} md={6}>
                    <div className={classes.textTitle}>
                        <Typography gutterBottom variant="h3"> Ecommerce </Typography>
                    </div>
                    <div className={classes.textInfo}>
                        <Typography gutterBottom variant="h5"> Para negocios que venden en línea,  y desean <br/> incrementar sus ventas. </Typography>
                    </div>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={Ecom}/>
                    </ButtonBase>
                    <div className={classes.buttonLanding}>
                    <Button variant="contained" color="primary" href="/Ecommerce" disableElevation >
                        ¡Ver más!
                    </Button>
                    </div>
                </Grid>
            </Grid>
            </animated.div>
            
            {/* Contenedor de servicios */}
            <Grid containter spacing={1} className={classes.grid4}>
                <Grid items xs={8} md={6}>
                    <Paper className={classes.paperCont}> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Paper>
                </Grid>
            </Grid>
            </div>
        </section>  
        </>
    )
}
