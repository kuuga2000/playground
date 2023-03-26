import { useState } from 'react'
import Header from './components/Header';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countx, setCountx] = useState(0)

  return (
    <div className="App">
      <Header message="This is message s" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountx((countx) => countx + 1)}>
          count is {countx}
        </button>
      </div>
    </div>
  )
}

export default App
