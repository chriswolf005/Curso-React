import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Define el array de elementos
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3']

  return (
    <>
      <section>
        <h1>Hola mundo</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
