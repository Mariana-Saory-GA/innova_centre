import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles ((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'Assets/img/Images/WebPage.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function WebPage() {
    const classes = useStyles();

    return( 
    <div className={classes.root}>
        <CssBaseline/>
        <Header/>
    </div>
    );
}