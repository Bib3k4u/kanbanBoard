import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      {/* Add more ticket details here */}
    </div>
  );
};

export default Ticket;
