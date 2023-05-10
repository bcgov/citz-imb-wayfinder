import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)
  const buttonHandler = (): void => {
    setCount(count => count+1);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p> words! </p>
        <input type={"button"} value={count} onClick={buttonHandler} /> 
      </div>

    </>
  )
}

export default App
