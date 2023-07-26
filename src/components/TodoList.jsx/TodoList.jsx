import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState(dafaultTodos);

  //투두 추가
  const addTodo = (addedTodo) => setTodos([...todos, addedTodo]);
  //투두 삭제
  const deleteTodo = (deletedTodo) => setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  //투두 상태변경
  const updateTodo = (updatedTodo) => setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));

  return (
    <div className='todoBox'>
      <div className='todoList'>
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />;
          })}
        </ul>
      </div>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

const dafaultTodos = [
  { id: '001', title: '공부', status: '진행중' },
  { id: '002', title: '수영', status: '진행중' },
  { id: '003', title: '카페가기', status: '진행중' },
];
