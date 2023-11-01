import React, { useState, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import DisplayDropdown from './DisplayDropdown';  
const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleDrop = (ticketId, newStatus) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <>
    <h1>Kanban Board</h1>
    <DisplayDropdown />
    <div className="kanban-board-container">
      <div className="kanban-board">
        <KanbanColumn title="Todo" todos={tickets} onDrop={handleDrop} />
        <KanbanColumn title="In Progress" todos={tickets} onDrop={handleDrop} />
        <KanbanColumn title="Done" todos={tickets} onDrop={handleDrop} />
        <KanbanColumn title="Cancelled" todos={tickets} onDrop={handleDrop} />
      </div>
    </div>
    </>
  );
};

export default KanbanBoard;
