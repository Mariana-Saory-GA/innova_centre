import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles ({
    root: {
        maxWidth: 480,
        background: 'rgba(0, 0, 0, 0.5)',
        margin: '25px',
    },
    media: {
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
        textAlign: 'center',
    },
    desc: {
        color: '#ddd',
        textAlign: 'center',
    },
    price: {
        color: '#ddd',
        textAlign: 'center',
    },
});

export default function CardImage({ pack, checked }){
    const classes = useStyles();
    return(
        <Collapse in={checked} {...(checked ? { timeout: 1000} : {})}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={pack.imageUrl}
                    title="Contemplative Reptile"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    {pack.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                    {pack.description}
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
                    {pack.price}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </Collapse>
    );
}
