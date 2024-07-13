// src/components/TicketList.js
import React from 'react';
import PropTypes from 'prop-types';

const TicketList = ({ tickets, onTicketSelect }) => {
  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} onClick={() => onTicketSelect(ticket)}>
            {ticket.title} - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  onTicketSelect: PropTypes.func.isRequired,
};

export default TicketList;
