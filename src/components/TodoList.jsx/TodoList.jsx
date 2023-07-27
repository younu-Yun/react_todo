import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ selectedFilter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  //todos 추가
  const addTodo = (addedTodo) => setTodos([...todos, addedTodo]);
  //todos 삭제
  const deleteTodo = (deletedTodo) =>
    setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  //todos 상태변경
  const updateTodo = (updatedTodo) =>
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  //todos 수정
  const changeTodo = (changedTodo) => {
    console.log(changedTodo);
    setTodos(
      todos.map((todo) => (todo.id === changedTodo.id ? changedTodo : todo))
    );
  };

  //filter된 todos
  const selectedTodos = getFilteredTodos(todos, selectedFilter);

  //todo가 변경될때마다
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoBox">
      <div className="todoList">
        <ul>
          {selectedTodos.map((todo) => {
            return (
              <Todo
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                changeTodo={changeTodo}
              />
            );
          })}
        </ul>
      </div>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

function getFilteredTodos(todos, selectedFilter) {
  if (selectedFilter === '전체') {
    return todos;
  }
  return todos.filter((todo) => todo.status === selectedFilter);
}

function readTodosFromLocalStorage() {
  console.log('chek');
  const todos = localStorage.getItem('todos');
  //todos가 localStorage에 있으면 불러오고, 아니면 빈배열 return
  return todos ? JSON.parse(todos) : [];
}
