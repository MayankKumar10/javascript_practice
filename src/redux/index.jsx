import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { authReducer } from "./authSlice";
import createSagaMiddleware from "redux-saga";
import { TodosThunkReducer } from "../components/ReactjsQuestions/ThunkAndSagas/TodoThunkSlice";
import rootSaga from "../components/ReactjsQuestions/ThunkAndSagas/TodoSaga";
import { TodoSagaReducer } from "../components/ReactjsQuestions/ThunkAndSagas/TodoSagaSlice";
import { EmployeeReducer } from "./EmployeeTableSlice";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    
  reducer:{
    products: productsReducer,
    auth: authReducer,
    todos: TodosThunkReducer,
    todosSaga: TodoSagaReducer,

    employeeTable: EmployeeReducer
  },

  middleware: (func) => func().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)