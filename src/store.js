import { configureStore } from "@reduxjs/toolkit";
import { exerciseApi } from "./exerciseApi";
export default configureStore({
    reducer:{
        [exerciseApi.reducerPath]:exerciseApi.reducer,
    }
});