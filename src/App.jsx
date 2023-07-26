import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='inner'>
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
          <div className='addTodo'>
            <form>
              <input type='text' name='' id='' placeholder='할 일을 추가해주세요! :D' />
              <button type='submit'>추가</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
