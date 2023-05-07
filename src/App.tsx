import { useContext, useState } from 'react'
import './App.css'

function App() {
  const [night, setNight] = useState(false)
  function toggle() {
    setNight(!night)
  }

  const [ geral, setGeral ] = useState("ALL")
  const [task , setTask] = useState("")
  const [exibe, setExibe] = useState([{
    id: 33,
    task: "fazer bolo",
    checked: true
  }])
  const [listTask, setListTask] = useState([
    {
      id: 1,
      task: "fazer bolo",
      checked: true
    }
])

  function addTask() {
    const newTask = {
        id: Math.random(),
        task: task,
        checked: false
    }
    setListTask([...listTask, newTask])
    setExibe([...listTask, newTask])
    setTask("");
  }

  function handleKeyPress(event: { key: any }) {
      if (event.key === 'Enter' && task.length !== 0) { 
        addTask()     
      }
  }

  function removeTask(id: number){
    const newList = listTask.filter(task => task.id !== id)
    setListTask(newList)
    setExibe(newList)
  }

  function toggleChecked(id: number, checked:boolean){
    const index = listTask.findIndex(task => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])
    setExibe([...newList])
  }
  

  function clearCompleted(){
    console.log(exibe)
    setGeral("CLEAR COMPLETED")
    if(geral==="CLEAR COMPLETED"){
      setExibe([])
    }
  }


    return (
      <>
        <h1>TODO</h1> <button className={night ? 'night' : 'sun'} onClick={toggle} >  </button>
        <div className="todo">
          <button></button>
          <input type="text"
            value={task}
            name="todo-input"
            placeholder='Criar'
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className="result">
          <ul>
            { exibe.map((task) => {
              return (
                <li key={task.task} draggable={true}>
                  <label htmlFor="list">
                    <input type="checkbox" checked={task.checked}
                    onChange={()=> toggleChecked(task.id, task.checked)}/>
                    <span onClick={()=>toggleChecked(task.id, task.checked)}> {task.task} </span>
                    <button onClick={()=>removeTask(task.id)}>Trash</button>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="base">
          <span>{task.length}</span>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>   <button onClick={()=> clearCompleted() }>Clear Completed</button>
        </div>
      </>
    )
}


export default App
