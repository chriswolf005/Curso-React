import { useState } from 'react'
import Card from './componentes/Card' // 🔧 CORREGIDO
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3']

  return (
    <section>
      <h1>Hola mundo</h1>

      <Card title="Hola" description="Soy un componente" />
      <Card title="Card 2" description="Otra descripción" /> {/* 🔤 Ortografía corregida */}
      <Card title="Card 3" description="Hola este es otro componente" /> {/* 🔤 Ortografía corregida */}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default App
