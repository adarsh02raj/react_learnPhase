import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCount] = useState(0)
  const addValue = ()=>{
    counter += 1;
    setCount(counter)
  }
  const removeValue = ()=>{
    counter--;
    if(counter >= 0){
    setCount(counter)
    }
    else counter=0
  }
  return (

    <>
      <h1>Chai Aur Code</h1>
      <h4>Counter Value: {counter}</h4>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
