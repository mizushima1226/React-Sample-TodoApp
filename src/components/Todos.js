import React from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export const userTodo = React.createContext();

export default function Todos() {
  const [todos, setTodo] = useState([
    //    { item: 'aaa', isCompleted: false },
    //    { item: 'bbb', isCompleted: false },
    //    { item: 'ccc', isCompleted: false }
  ]);
  const value = {
    todos,
    setTodo
  };

  return (
    <div>
      <userTodo.Provider value={value}>
        <h1>ToDo List</h1>
        <TodoInput />
        <div id="table">
          <h2>やることリスト</h2>
          <TodoItem />
        </div>
      </userTodo.Provider>
    </div>
  );
}
