import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './constants';
import Todo from './Todo';

const KanbanColumn = ({ title, todos, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TODO,
    drop: (item) => onDrop(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const renderTodos = () => {
    if (title === 'Todo') {
      return todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ));
    } else {
      // Filter and render based on the column's title
      return todos
        .filter((todo) => todo.status === title)
        .map((todo) => (
          <Todo key={todo.id} {...todo} />
        ));
    }
  };

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        minWidth: '300px',
        border: '1px solid #ddd',
        margin: '10px',
        padding: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        backgroundColor: isOver ? '#e6ffe6' : '#f1f1f1',
      }}
    >
      <h2>{title}</h2>
      {renderTodos()}
    </div>
  );
};

export default KanbanColumn;
