import React, { useState } from 'react';
import './App.css';
import { TicketDisplay } from './Components/TicketDisplay';
import { ITicket } from './Interfaces/ITicket';

function App() {

  let ticket: ITicket;
  ticket = {
    ticketId: 1,
    flightId: 5,
    userId: 4,
    seatId: 1
  }

  return (
    <div className="App">
      <TicketDisplay {...ticket}/>
    </div>
  );
}

export default App;
