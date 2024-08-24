import { useState } from "react";
function Counter(){
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    return(
        <>
            count X:{x}
            <button onClick={()=>setX(x+1)}>Incr</button>
            <button onClick={()=>setX(x-1)}>Decr</button>
            <br />
            count Y:{y}
            <button onClick={()=>setY(y+1)}>Incr</button>
            <button onClick={()=>setY(y-1)}>Decr</button>
       
        </>
    );
}

export default Counter;