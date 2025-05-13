import{ useState } from 'react';
const Counter=()=>{
    const[count,setcount]=useState(0);

    return (
        <div>
            <p>El contador esta en: {count}</p>
            <button onClick={()=>setcount(count+1)}>Incrementar</button>
            <button onClick={()=>setcount(count-1)}>Decrementar</button>
            <button onClick={()=>setcount(0)}>Reiniciar</button>
        </div>
    )
}

export default Counter;