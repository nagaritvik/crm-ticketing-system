// src/components/NewTicketForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTicketForm = ({ onNewTicket }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTicket({ title, description, status: 'Open' });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="new-ticket-form">
      <h3>Create New Ticket</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

NewTicketForm.propTypes = {
  onNewTicket: PropTypes.func.isRequired,
};

export default NewTicketForm;
