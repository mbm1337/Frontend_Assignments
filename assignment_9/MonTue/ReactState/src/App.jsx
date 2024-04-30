import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount,] = useState(0)
  const [value, setValue] = useState()

  return (
    <>
    <Counter count={count} setCount={setCount} value={value} setValue = {setValue}/>

    </>
  )
}

export default App
