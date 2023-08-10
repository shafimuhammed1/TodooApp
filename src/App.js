import './App.css'
import{useState} from 'react'

function App() {
  const [Todos,setTodos] = useState([])
  const [Todo,setTodo] = useState('')

  return (
<div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={Todo} onChange={(event)=>setTodo(event.target.value)}   type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...Todos,{id:Date.now() ,text:Todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {  Todos.map((obj)=>{

      
      return(<div className="todo">
          <div className="left">
            <input onChange={(event)=>{
              setTodos(Todos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=event.target.checked
                }
                return obj2
              }))

            }} value={obj.text} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })}

        {Todos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  )
}


export default App
