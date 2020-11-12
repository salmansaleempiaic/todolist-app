import React from 'react'

export const ToDoItem = ({listItem,list,setList, setInput}) => {
 const removeHandler = (id) => {
    setList(()=>{ return list.filter((list)=>{return list.id !==id})});
 }
 const editHandler = (id) => {
  removeHandler(id)
  setInput(listItem.task);
 }
 
 return (
  <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
   <h6>{listItem.task}</h6>
   <div className="todo-icon">
    <span className="mx-2 text-success" onClick={()=>{
     editHandler(listItem.id)
    }}>
     <i className="fas fa-pen"></i>
    </span>
    <span className="mx-2 text-danger" onClick={()=>{removeHandler(listItem.id)}}>
     <i className="fas fa-trash"></i>
    </span>
   </div>
  </li>
 )
}