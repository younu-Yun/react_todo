import React, { useState } from 'react';

export default function Todo({ key, todo, deleteTodo }) {
  const { id, title, state } = todo;

  const handleDelete = () => {
    deleteTodo({ id, title, state });
  };
  return (
    <li key={key}>
      <div>
        <input type='checkbox' name={`todo_${id}`} id={`todo_${id}`} />
        <label htmlFor={`todo_${id}`}>
          <span>{title}</span>
        </label>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
