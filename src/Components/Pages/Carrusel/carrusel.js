import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import '../../Styles/styles.css';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 700, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carrusel() {
  return (
    <>
    <section className="distancia">
       <div className="contenido">
         <div className="titulo">
          <h1> Principales Clientes </h1>
        </div>  
        <div className="carrusel">
          <Carousel breakPoints={breakPoints}>
            <Item className="img"></Item>
            <Item className="img"></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Carousel>
        </div>
      </div>
    </section>
      
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Carrusel />, rootElement);

export default Carrusel