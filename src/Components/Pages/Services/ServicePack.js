import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardImage from './CardImage';
import Packs from './Packs';
import UseWindowPosition from '../../../Hooks/UseWindowPosition';

const useStyles = makeStyles ((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
}));
export default function ServicePack () {
    const classes = useStyles();
    const checked = UseWindowPosition('header');
    return(
        <div className={classes.root} id="service-pack">
            <CardImage pack={Packs[0]} checked={checked} />
            <CardImage pack={Packs[1]} checked={checked} />
            <CardImage pack={Packs[2]} checked={checked} />
        </div>
    );
}