import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchData, fetchError, fetchLoading } from "./TodoSagaSlice";

function* fetchSagaData(){
  try{
    let response = yield call( axios.get, "https://jsonplaceholder.typicode.com/todos")
    yield put(fetchData(response.data))

  } catch(error){
    yield put(fetchError(error.message)) 
  }
}

function* watchSagaData(){
  yield takeEvery(fetchLoading.type, fetchSagaData)
}

export default function* rootSaga(){
  yield all([watchSagaData()])
}
