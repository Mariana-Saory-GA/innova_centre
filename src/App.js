import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import ContactUs from './Components/Pages/Users/ContactUs.js';


function App() {
  return (
    <div className="page-container" id="outer-container">
      <div className="content-wrap">
      <Router>
          <Switch>
            <Route path="/Home" exact>
              <Home/>
            </Route>
            <Route path="/ContactUs">
              <ContactUs/>
            </Route>
          </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
