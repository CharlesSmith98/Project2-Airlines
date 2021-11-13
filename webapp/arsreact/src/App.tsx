import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Book } from './Components/Flight/Book';
import './Components/Landing/Main'
import { Main } from './Components/Landing/Main';
import { TicketDisplay } from './Components/TicketDisplay';

function App() {

  return (
    <div className="grad h-100">
      <Router>
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/book"><Book /></Route>
          <Route exact path='/ideas/:id/'><TicketDisplay /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
