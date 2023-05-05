import { useContext, useState } from 'react'
import './App.css'

function App() {

  interface Ilist {
    id?: number;
    task?: string;
    checked?: boolean;
  }

  const [night, setNight] = useState(false)
  const [task, setTask] = useState<string>("")
  const [arr, setArr] = useState([])
  const [list, setList] = useState<Ilist>({})
  const [checked, setChecked] = useState<number[]>([])
  const [boleano , setBoleano] = useState<boolean>(false)
  function toggle() {
    setNight(!night)
  }

  function doTask(e: string) {
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false
    };
    setList(  {...list,...newTask }   )
  }
  function handleKeyPress(event: { key: any }) {
    if (event.key === 'Enter' && task !== "") {

      console.log(list)
    }
  }
  function sendCheck(par : number, e: any){
    setChecked([...checked, par])
    console.log(e)
  }

  return (
    <>
      <h1>TODO</h1> <button className={night ? 'night' : 'sun'} onClick={toggle} >  </button>
      <div className="todo">
        <button></button>
        <input type="text"
          name="todo-input"
          placeholder='Criar'
          onChange={(e) => doTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="result">
        <ul>
          { Object.keys(list).map((valor, key) => {
            return (
                <li key={key} draggable={true}>
                  <label htmlFor="list">
                    <input type="checkbox"/>
                    <span> {  key + " " + valor } </span>
                  </label> 
                </li>
            )
          })}
        </ul>
      </div>
      <div className="base">
        <span>{ list.length }</span> 
        <button>All</button> 
        <button>Active</button>
        <button>Completed</button>   <button>Clear Completed</button>
      </div>
    </>
  )
}

export default App
