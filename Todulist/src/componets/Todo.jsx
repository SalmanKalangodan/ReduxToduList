import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo, Edit, RemoveTodo } from '../features/TodoSlice/todoSlice'

function Todo() {
    const [state ,setState] =useState('')
    const Dispatch =useDispatch()
    const data=useSelector((state)=>state.todos)
   const  HandleAdd=()=>{
    if(state.length>0){
      Dispatch(AddTodo(state))
      setState('')
    }
   
   }
   const HandleRemove=(index)=>{
     Dispatch(RemoveTodo(index))
   }
   const HandleEdit=(index,value)=>{
    setState(value)
    Dispatch(Edit(index))
   }

  return (
    <>    <div>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
        <button  onClick={HandleAdd}>add</button>
    </div>
    <div>
         {data&&data.map((value,index)=>{
            return(
                <div key={index} style={{"background":"black"}}>{value.text} <button onClick={()=>HandleRemove(index)} >remove</button>
                <button onClick={()=>HandleEdit(index,value.text)}>edit</button></div>

            )
         })}
    </div>
    </>

  )
}

export default Todo