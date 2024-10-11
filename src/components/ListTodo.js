import React from 'react';
import { useSelector } from 'react-redux';
import DisplayTodo from './DisplayTodo';

const ListTodo = () => {
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    return <p style={{
        textAlign: 'center',
        color: 'red',
      }}>Currently no tasks added!</p>;
  }

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <ul>
      {todos.map((todo) => (
        <DisplayTodo key={todo.id} todo={todo} />
      ))}
    </ul>
    </div>
  );
};


export default ListTodo;
