import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Login} from './Components/Login/Login';
import {Register} from './Components/Register/Register'

import './App.css';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
  
}

export default App;


