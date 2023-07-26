import React from 'react';

export default function Filter() {
  return (
    <nav>
      <ul>
        <li>
          <input type='radio' name='filter' id='filter01' />
          <label htmlFor='filter01'>전체</label>
        </li>
        <li>
          <input type='radio' name='filter' id='filter02' />
          <label htmlFor='filter02'>진행중</label>
        </li>
        <li>
          <input type='radio' name='filter' id='filter03' />
          <label htmlFor='filter03'>완료</label>
        </li>
      </ul>
    </nav>
  );
}
