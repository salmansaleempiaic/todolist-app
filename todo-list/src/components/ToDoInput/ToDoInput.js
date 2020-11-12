import React from 'react'

export const ToDoInput = ({input,setInput,list,setList,counter,setCounter}) => {
 const addHandler = (e) => {
  e.preventDefault();
  setList(()=>{return [...list,{id:counter,task:input}]});
  setCounter(()=>{return counter+1;})
 }
 const inputHandler = (e) => {
  setInput(e.target.value)
 }
 return (
  <div className="card card-body my-3">
   <form onSubmit={addHandler}>
    <div className="input-group">
     <div className="input-group-prepend">
      <div className="input-group-text bg-primary text-white">
       <i className="fas fa-book"></i>
      </div>
      <input type="text" className="form-control text-capitalize" placeholder="add to do item" value={input} onChange={inputHandler} />
     </div>
     <button type="submit" className="btn btn-block text-capitalize btn-primary mt-2">add item</button>
    </div>
   </form>
  </div>
 )
}