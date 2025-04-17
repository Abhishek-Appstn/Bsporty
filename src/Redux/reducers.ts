import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./Slices/languageSlice";

const rootReducer = combineReducers({
    language: languageReducer 
});

export default rootReducer;
