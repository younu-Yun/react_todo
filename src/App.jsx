import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList.jsx/TodoList';

const filters = ['전체', '진행중', '완료'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="container">
      <div className="inner">
        <Filter
          filters={filters}
          onFilterChange={(filter) => setFilter(filter)}
        />
        <TodoList selectedFilter={filter} />
      </div>
    </div>
  );
}
export default App;
