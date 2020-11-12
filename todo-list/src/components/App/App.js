import React,{useState} from 'react';
import {ToDoInput} from '../ToDoInput/ToDoInput';
import {ToDoList} from '../ToDoList/ToDoList';


export const App = () => {
  const [input,setInput] = useState('');
  const [list,setList] = useState([]);
  const [counter,setCounter] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            todo input
          </h3>
          <ToDoInput list={list} input={input} setInput={setInput} setList={setList} setCounter={setCounter} counter={counter} />
          <ToDoList list={list} setList={setList} input={input} setInput={setInput} />
        </div>
      </div>
    </div>
  )
}