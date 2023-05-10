import { useContext, useState } from 'react'
// import './App.css'

import {
  Cross, Label, ImputCheck, InputFalse, Container, Entrada,
  BotaoToggle, TodoList, TituloToggle, ImputEntrada, ListaMap,
  Estados, Contador
} from './components/styles'

function App() {
  const [night, setNight] = useState(true)
  function toggle() {
    setNight(!night)
  }

  interface ITask{
    id: number;
    task: string;
    checked: boolean;
  }

  const [task, setTask] = useState("")
  const [exibe, setExibe] = useState<any>([])
  const [listTask, setListTask] = useState<any>([])

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
    const newList = listTask.filter( (task : ITask) => task.id !== id)
    setListTask(newList)
    setExibe(newList)
  }

  function toggleChecked(id: number, checked: boolean) {
    const index = listTask.findIndex((task : ITask) => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])
    setExibe([...newList])
  }

  function clearCompleted() {
    const marcado = listTask.filter( (task: ITask) => task.checked === false)
    setExibe([...marcado])
    setListTask([...marcado])
  }
  function completed() {
    const marcado = listTask.filter( (task: ITask) => task.checked === true)
    console.log(marcado)
    if (marcado.length > 0) {
      setExibe([...marcado])
    }
  }
  function active() {
    const marcado = listTask.filter( (task: ITask) => task.checked === false)
    if (marcado.length > 0) {
      setExibe([...marcado])
    }
  }
  function all() {
    setExibe([...listTask])
  }

  return (
    <>
      <Container>
        <TodoList>
          <TituloToggle>
            <h1>TODO</h1>
            <BotaoToggle className={night ? 'night' : 'sun'}
              toggle={night ? 'night' : 'sun'}
              onClick={toggle} >
            </BotaoToggle>
          </TituloToggle>

          <Entrada>
            <InputFalse type="checkbox" name="nulo" id="y" defaultChecked={false}/>
            <label htmlFor="y"></label>
            <ImputEntrada type="text"
              value={task}
              name="todo-input"
              placeholder='Create a new todo...'
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </Entrada>


          <ListaMap>
            <ul>
              {exibe.map((task: ITask ) => {
                return (
                  <li key={task.id} draggable={true}>
                    <Label htmlFor="list">
                      <ImputCheck id='x' type="checkbox" checked={task.checked}
                        
                        onChange={() => toggleChecked(task.id, task.checked)} />
                      <label htmlFor="x"></label>{/* importante checkbox */}
                      <span onClick={() => toggleChecked(task.id, task.checked)}> {task.task} </span>
                      <Cross onClick={() => removeTask(task.id)}>
                      </Cross>
                    </Label>
                  </li>
                )
              })}
            </ul>
          </ListaMap>
          <Estados>
            <Contador>{listTask.length} Items left</Contador>
            <button onClick={() => all()}>All</button>
            <button onClick={() => active()}>Active</button>
            <button onClick={() => completed()}>Completed</button>
            <button onClick={() => clearCompleted()}>Clear Completed</button>
          </Estados>
        </TodoList>
      </Container>
    </>
  )
}


export default App
