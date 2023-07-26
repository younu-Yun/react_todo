import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState(dafaultTodos);

  return (
    <div className='todoBox'>
      <div className='todoList'>
        <ul>
          {todos.map((todo) => {
            const { id, title } = todo;
            return (
              <li key={id}>
                <div>
                  <input type='checkbox' name={`todo_${id}`} id={`todo_${id}`} />
                  <label htmlFor={`todo_${id}`}>
                    <span>{title}</span>
                  </label>
                </div>
                <button>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const dafaultTodos = [
  { id: '001', title: '공부', status: '진행중' },
  { id: '002', title: '수영', status: '진행중' },
  { id: '003', title: '카페가기', status: '진행중' },
];