// src/App.js
import React, { useState } from 'react';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import NewTicketForm from './components/NewTicketForm';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Issue 1', description: 'This is issue 1 description', status: 'Open' },
    { id: 2, title: 'Issue 2', description: 'This is issue 2 description', status: 'Pending' },
    { id: 3, title: 'Issue 3', description: 'This is issue 3 description', status: 'Closed' },
  ]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleNewTicket = (newTicket) => {
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
  };

  return (
    <div className="app-container">
      <h1>CRM Ticketing System</h1>
      <div className="ticketing-system">
        <TicketList tickets={tickets} onTicketSelect={handleTicketSelect} />
        <div className="ticket-detail">
          {selectedTicket ? (
            <TicketDetail ticket={selectedTicket} />
          ) : (
            <p>Select a ticket to see details</p>
          )}
          <NewTicketForm onNewTicket={handleNewTicket} />
        </div>
      </div>
    </div>
  );
};

export default App;
