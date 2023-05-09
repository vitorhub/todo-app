import { useContext, useState } from 'react'
import './App.css'

import {Cross , Label, ImputCheck } from './components/styles'

function App() {
  const [night, setNight] = useState(false)
  function toggle() {
    setNight(!night)
  }

  const [task, setTask] = useState("")
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

  function removeTask(id: number) {
    const newList = listTask.filter(task => task.id !== id)
    setListTask(newList)
    setExibe(newList)
  }

  function toggleChecked(id: number, checked: boolean) {
    const index = listTask.findIndex(task => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])
    setExibe([...newList])
    // console.log(listTask)
  }

  function clearCompleted() {
    const marcado = listTask.filter(task => task.checked === false)
    setExibe([...marcado])
    setListTask([...marcado])
    // console.log(exibe)
  }
  function completed() {
    const marcado = listTask.filter(task => task.checked === true)
    console.log(marcado)
    if (marcado.length > 0) {
      setExibe([...marcado])
    }
  }
  function active() {
    const marcado = listTask.filter(task => task.checked === false)
    if(marcado.length > 0){
      setExibe([...marcado])
    }
  }
  function all() {
    setExibe([...listTask])
  }

  return (
    <>
      <h1>TODO</h1> <button className={night ? 'night' : 'sun'} onClick={toggle} >  </button>
      <div className="todo">
        <button>aki</button>
        <input type="text"
          value={task}
          name="todo-input"
          placeholder='Criar'
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      <div>
        <ul>
          {exibe.map((task) => {
            return (
              <li key={task.id} draggable={true}>
                <Label htmlFor="list">
                  <ImputCheck id='x' type="checkbox" checked={task.checked}
                    onChange={() => toggleChecked(task.id, task.checked)} />
                    <label htmlFor="x"></label>
                  <span onClick={() => toggleChecked(task.id, task.checked)}> {task.task} </span>
                  <Cross onClick={() => removeTask(task.id)}>
                  </Cross>
                </Label>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="base">
        <span>{listTask.length}</span>
        <button onClick={() => all()}>All</button>
        <button onClick={() => active()}>Active</button>
        <button onClick={() => completed()}>Completed</button>
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </>
  )
}


export default App
