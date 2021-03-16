import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home.jsx';
import WhoAreWe from './Components/Pages/whoAreWe.jsx';
import Services from './Components/Pages/Services/services.jsx';
import WebPage from './Components/Pages/Services/WebPage.jsx';
import DigitalMarketing from './Components/Pages/Services/DigitalMarketing.jsx';
import Ecommerce from './Components/Pages/Services/Ecommerce.jsx';



function App() {
  return (
    <div className="App" id="outer-container">
      <Router>
        {/*<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>*/}
          <Switch>
            <Route path="/">
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
  );
}

export default App;
