import React, { useState } from 'react';

export default function Todo({ key, todo, deleteTodo, updateTodo, changeTodo }) {
  const { id, title, status } = todo;

  const [modifyTitle, setModifyTitle] = useState(title);
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleDelete = () => {
    deleteTodo(todo);
  };

  const handleStatus = (e) => {
    const changedStatus = e.target.checked ? '완료' : '진행중';
    updateTodo({ ...todo, status: changedStatus });
  };

  const handleChange = (e) => {
    setModifyTitle(e.target.value);

    console.log(modifyTitle);
  };

  const changeReadOnly = () => {
    window.confirm('수정하시겠습니까?') ? setIsReadOnly(!isReadOnly) : setIsReadOnly(true);
  };

  const handleModify = () => {
    if (modifyTitle === todo.title) {
      alert('변경된 내용이 없습니다.');
      setIsReadOnly((prev) => prev);
    } else {
      changeTodo({ id, title: modifyTitle, status });
      setIsReadOnly((prev) => !prev);
    }
  };

  return (
    <li key={key}>
      <div>
        <input type='checkbox' name={`todo_${id}`} id={`todo_${id}`} onChange={handleStatus} />
        <label htmlFor={`todo_${id}`}>
          <input type='text' readOnly={isReadOnly} value={modifyTitle} onChange={handleChange} onClick={changeReadOnly} />
        </label>
      </div>
      <div className='button'>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleModify}>수정</button>
      </div>
    </li>
  );
}
