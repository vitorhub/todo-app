import { useContext, useState } from 'react'
import './App.css'

function App() {

  const [night, setNight] = useState(false)
  const [task, setTask] = useState<string>("")
  const [arr, setArr] = useState([])
  const [list, setList] = useState<string[]>([])
  const [checked, setChecked] = useState<number[]>([])
  function toggle() {
    setNight(!night)
  }

  function doTask(e: string) {
    setTask(e)
  }
  function handleKeyPress(event: { key: any }) {
    if (event.key === 'Enter' && task !== "") {
      setList([...list, task]) // para spread array
      console.log(list)
    }
  }
  function sendCheck(par : number){
    setChecked([...checked, par])
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
          {list.map((element, index) => {
            return (
                <li key={index} draggable={true}>
                  <label htmlFor="list">
                    <input type="checkbox" name={element} onClick={()=>sendCheck(index)}/>
                    <span> {  checked.indexOf(index) !== -1 ? 1 : element } </span>
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
