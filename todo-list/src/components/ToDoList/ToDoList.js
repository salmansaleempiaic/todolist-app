import React from 'react';
import {ToDoItem} from '../ToDoItem/ToDoItem';

export const ToDoList = ({list, setList, setInput}) => {
 return (
  <div>
   <ul className="list-group my-5">
    <h3 className="text-capitalize text-center">todo list</h3>
    {list.map((listItem)=>{
     return(
      <ToDoItem listItem={listItem} key={listItem.id} list={list} setList={setList} setInput={setInput} />
     )
    })}
    <button type="button" className="btn-block text-capitalize mt-5 btn btn-danger">clear list</button>
   </ul>
  </div>
 )
}