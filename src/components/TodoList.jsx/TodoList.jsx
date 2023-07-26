import React from 'react';

export default function TodoList() {
  return (
    <div className='todoBox'>
      <div className='todoList'>
        <ul>
          <li>
            <div>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>
                <span>공부</span>
              </label>
            </div>
            <button>삭제</button>
          </li>
          <li>
            <div>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>
                <span>수영</span>
              </label>
            </div>
            <button>삭제</button>
          </li>
          <li>
            <div>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>
                <span>카페가기</span>
              </label>
            </div>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
