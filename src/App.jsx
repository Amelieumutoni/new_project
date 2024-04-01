
import NavBar  from "./to-do/NavBar"
import { ViewTodo } from "./to-do/ViewTodo"
import  AddTodo  from "./to-do/AddTodo"
import {useState} from "react"
function App() {

const [todos,setTodos] = useState([])
console.table(todos)

  return (
    //state
   
    <>
      <NavBar></NavBar>
      <div className="flex gap-2 w-4/6 m-auto mt-32 max-lg:w-11/12 max-md:flex-wrap">
        <div className="w-full">
          <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
        </div>
        <div className="w-full">
          <ViewTodo todos={todos} setTodos={setTodos}></ViewTodo>
        </div>
      </div>

    </>
  )

}

export default App
