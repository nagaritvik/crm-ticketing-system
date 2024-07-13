// src/components/TicketDetail.js
import React from 'react';
import PropTypes from 'prop-types';

const TicketDetail = ({ ticket }) => {
  return (
    <div className="ticket-detail">
      <h3>{ticket.title}</h3>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
    </div>
  );
};

TicketDetail.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default TicketDetail;
