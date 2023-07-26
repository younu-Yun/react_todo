import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      return alert('할 일을 추가해주세요! :D');
    }

    addTodo({ id: uuidv4(), title, status: '진행중' });
    setTitle('');
  };

  return (
    <div className='addTodo'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='할 일을 추가해주세요! :D' value={title} onChange={handleChange} />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
}
