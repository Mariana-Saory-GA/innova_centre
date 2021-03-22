import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import WhoAreWe from './Components/Pages/whoAreWe.jsx';
import Services from './Components/Pages/Services/services.jsx';
import Footer from './Components/Pages/Footer.js';
import WebPage from './Components/Pages/Services/WebPage.jsx';
import DigitalMarketing from './Components/Pages/Services/DigitalMarketing.jsx';
import Ecommerce from './Components/Pages/Services/Ecommerce.jsx';

function App() {
  return (
    <div className="page-container" id="outer-container">
      <div className="content-wrap">
      <Router>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/whoAreWe">
              <WhoAreWe/>
            </Route>
            <Route path="/Services">
              <Services/>
            </Route>
            <Route path="/WebPage">
              <WebPage/>
            </Route>
            <Route path="/DigitalMarketing">
              <DigitalMarketing/>
            </Route>
            <Route path="/Ecommerce">
              <Ecommerce/>
            </Route>
          </Switch>
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
