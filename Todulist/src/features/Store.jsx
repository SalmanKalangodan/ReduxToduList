import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice/todoSlice";



export const Store = configureStore({
    reducer:todoSlice
})