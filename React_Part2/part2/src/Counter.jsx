// import { useState } from "react";
// function Counter(){
//     // const [x,setX]=useState(0);


//     const [isEditing, setIsEditing]=useState(false);
//     return(
//         <>
//             {/* count X:{x} is {(x%2 ==0) ? "Even" : "Odd"}
//             <button onClick={()=>setX(x+1)}>Incr</button>
//             <button onClick={()=>setX(x-1)}>Decr</button> */}
//                 {       

//                      (isEditing) ? <input/> : <p>Some todo</p>
//                 }

          
//           <br />
//           <button onClick={()=>setIsEditing(!isEditing)}> Click </button> 
//         </>
//     );
// }

// export default Counter;



// Passing Arrays In the useState
import { useState } from 'react'
import React from 'react'

const Counter = () => {

    const [todos, setTodos]=useState(['todo 1','todo 2'])
  return (
    <ul>
      {todos.map((todos) => <li>{todos}</li>)}
      {/* <button onClick={()=>{setTodos([1,2,3])}}>Click</button> */}
      <button onClick={()=>{setTodos([...todos,'another one'])}}>Click</button>
    </ul>
  )
}

export default Counter
