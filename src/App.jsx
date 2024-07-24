
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { JavascriptMCRound } from './components/JavascriptQuestions/JavascriptMCRound'
import { Accordion } from './components/ReactjsQuestions/Accordion'
import { NestedFolder } from './components/ReactjsQuestions/NestedFolder'
import { ProductLikeDislike } from './components/ReactjsQuestions/ProductLikeDislike'
import { Stopwatch } from './components/ReactjsQuestions/Stopwatch'
import { Todos } from './components/ReactjsQuestions/Todos'
import { nestedFolder } from './data/nestedFolder'
import { Login } from './components/ReactjsQuestions/Auth/Login'
import { ProtectedRoutes } from './components/ReactjsQuestions/Auth/ProtectedRoutes'
import { Dashboard } from './components/ReactjsQuestions/Auth/Dashboard'
import { Signup } from './components/ReactjsQuestions/Auth/Signup'
import { ImageUpload } from "./components/ReactjsQuestions/ImageUpload"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Table } from './components/ReactjsQuestions/Table'
import { Carousal } from './components/ReactjsQuestions/Carousal'
import { InfiniteScroll } from './components/ReactjsQuestions/InfiniteScroll'
import { ThunkTodos } from './components/ReactjsQuestions/ThunkAndSagas/ThunkTodos'
import { EmployeeCRUDTable } from './components/ReactjsQuestions/EmployeeCRUDTable'

function App() {
  const explorer = nestedFolder

  const auth = useSelector((state)=> state.auth.isAuthenticated)

  console.log("auth", auth)

  useEffect(()=>{

  },[auth])

  return (
    <>
      {/*----- Javascript ----- */}
    
      {/* <JavascriptMCRound /> */}
    
      {/*----- React ----- */}

      {/* <ProductLikeDislike /> */}

      {/* <Accordion /> */}

      {/* <NestedFolder explorer={explorer} /> */}

      {/* <Todos /> */}

      {/* <Stopwatch /> */}

      {/* <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes> */}

      {/* <ImageUpload />
      
      <Table /> */}
      
      <Carousal />

      {/* <InfiniteScroll />  */}

      {/* <ThunkTodos /> */}

      <EmployeeCRUDTable />

    </>
  )
}

export default App
