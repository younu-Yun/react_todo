import React from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList.jsx/TodoList';

function App() {
  return (
    <div className='container'>
      <div className='inner'>
        <Filter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
