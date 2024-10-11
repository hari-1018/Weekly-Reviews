import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../slice/todoslice';

const AddTodo = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e)=>{
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
          }
    }
  return (
    <div style={{display:'flex', justifyContent:'center', boxSizing:'border-box'}}> 
        <form onSubmit={onSubmit} style={{display:'flex', marginBottom:'20px'}}>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{flex:'1', padding:'10px', width:'600px', fontSize:'15px'}}
      />
      <button type="submit" style={{width:'75px',padding:'10px', fontSize:'15px', color:'white', fontWeight:'bold', marginLeft:'10px', cursor:'pointer', background:'green', border:'0', borderRadius:'20px'}}>
        Add
      </button>
    </form>
    </div>
  )
}

export default AddTodo