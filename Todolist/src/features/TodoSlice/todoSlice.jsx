import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
      AddTodo:(state,action)=>{
        const text={
          text:action.payload
        }
        state.todos.push(text)
      },
      RemoveTodo:(state,action)=>{
        state.todos=state.todos.filter((value,index)=>{
          return index!=action.payload
        })
      },
      Edit:(state,action)=>{
        state.todos=state.todos.filter((value,index)=>{
            return index!=action.payload
          })
      }
    }
})
export const {AddTodo , RemoveTodo , Edit} =todoSlice.actions
export default todoSlice.reducer