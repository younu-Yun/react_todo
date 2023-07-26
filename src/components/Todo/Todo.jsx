import React from 'react';

export default function Todo({ key, todo, deleteTodo, updateTodo }) {
  const { id, title, status } = todo;

  const handleDelete = () => {
    deleteTodo(todo);
  };

  const handleStatus = (e) => {
    const status = e.target.checked ? '완료' : '진행중';
    updateTodo({ ...todo, status });
  };

  return (
    <li key={key}>
      <div>
        <input type='checkbox' name={`todo_${id}`} id={`todo_${id}`} onChange={handleStatus} />
        <label htmlFor={`todo_${id}`}>
          <span>{title}</span>
        </label>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
