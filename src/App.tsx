import { useContext, useState } from 'react'
import './App.css'

function App() {
  const [night, setNight] = useState(false)
  function toggle() {
    setNight(!night)
  }

  interface IToggleChecked {
    id: number;
    checked: boolean;
  }

  const [task , setTask] = useState("")
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
  }

  function toggleChecked(id: number, checked:boolean){
    const index = listTask.findIndex(task => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])
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
            {listTask.map((task) => {
              return (
                <li key={task.id} draggable={true}>
                  <label htmlFor="list">
                    <input type="checkbox" checked={task.checked} onChange={()=> console.log('bundinha')}/>
                    <span> {task.task} </span>
                    <button onClick={()=>toggleChecked(task.id, task.checked)}>Check</button>
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
          <button>Completed</button>   <button>Clear Completed</button>
        </div>
      </>
    )
}


export default App
