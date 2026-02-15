import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-orange-500 bg-black p-5 text-3xl'>Hello world</h1>
    </>
  )
}

export default App
