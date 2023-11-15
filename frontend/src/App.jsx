import { useState } from "react"
import Task from "./components/Task"

const App= () => {
  let tasks = [
    {
    word1: "kosárlabda",
    word2: "focilabda",
    word3: "tollaslabda",
    word4: "röplabda"
    },
    {
      word1: "kutya",
      word2: "macska",
      word3: "ló",
      word4: "törpehörcsög"
    },
    {
      word1: "Javascript",
      word2: "Java",
      word3: "Python",
      word4: "Brainfuck"
    }
  ]
  const[pozicio, setPos] = useState(0);

  const pagination = (direction) => {
    if (pozicio + direction === -1) {
      setPos(tasks.length-1)
    }
    else if (pozicio + direction > tasks.length -1 ) {
      setPos(0)
    }
    else{
      setPos(pozicio => pozicio + direction)
    }
  }
  return(
    <div>
      <h2>Task No. {pozicio + 1}</h2>
      {/* {tasks.map(task => <Task data={task}/>)} */}
      <Task data = {tasks[pozicio]}/>
      <button onClick={() => {pagination(-1)}}>Balra</button>
      <button onClick={() => {pagination(1)}}>Jobbra</button>
    </div>
  )
}


export default App