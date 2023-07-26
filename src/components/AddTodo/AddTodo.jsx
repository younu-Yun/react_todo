import React from 'react';

export default function AddTodo() {
  return (
    <div className='addTodo'>
      <form>
        <input type='text' name='' id='' placeholder='할 일을 추가해주세요! :D' />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
}
