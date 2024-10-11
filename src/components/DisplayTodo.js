import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slice/todoslice';

const DisplayTodo = ({ todo }) => {
  const [done, setDone] = useState();
  const dispatch = useDispatch();

  const handleDelete = () => {
    if(done)
    {
    dispatch(deleteTodo(todo.id));
    }
    else{
        setDone(true);
    }
  };

  return (
    <li style={{
        listStyleType: 'square',
        display: 'flex',
        justifyContent: 'space-between',
        padding:'10px'
      }}>
      <div
       
        style={{
        display:'flex',
        justifyContent:'center',
        backgroundColor: done ? 'green':'red',
        width:'500px',
        cursor: 'pointer',
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold',
        marginRight:'10px',

        }}
      >
        {todo.text}
      </div>
      <button onClick={handleDelete} style={{background: done ? 'red':'green', border:'0', color:'white', fontWeight:'bold', width:'100px', padding:'10px', cursor:'pointer', borderRadius:'20px'}}>
        {done ? 'Delete🚮': 'Done❔'}
      </button>
    </li>
  );
};


export default DisplayTodo;
