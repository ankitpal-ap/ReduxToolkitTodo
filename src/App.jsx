import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todo';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-bold text-dark-black'>
        Learn about Redux toolkit</h1>
      <AddTodo/>
      <Todos/>
  
    </>
  )
}

export default App
