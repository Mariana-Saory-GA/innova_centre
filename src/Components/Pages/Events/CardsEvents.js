import React from 'react';
import './../../Styles/services.css'

const CardsEvents = props =>{
    return(
        <>
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Event" className="card-img-top"/>
                </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title} </h4>
                    <p className="card-text card-secondary">
                        {props.text}
                    </p>
            <a href="#" className="btn btn-outline-warning"> Más información </a>
            <a href="#" className="btn btn-outline-secondary" style={{marginTop: '5px'}}> Boletos </a>
            </div>
            </div>
        </>
    )
}

export default CardsEvents