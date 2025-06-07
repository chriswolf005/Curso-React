import  { useEffect, useState } from 'react'
const CounterWithEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Ta de pinga 🤠 ${count}`);
    }, [count])

    return (
        <div>
            <h1>Contador con useEffect</h1>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}
export default CounterWithEffect