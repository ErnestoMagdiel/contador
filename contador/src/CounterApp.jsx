import { useState } from "react";

export const CounterApp = () => {
 
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter(c=> counter+1);
  }

  return (
<>
      <h1>El valor del contador es {counter}</h1>
      <button onClick={()=>counterIncrement()}
      >Incrementar contador+1</button>
    </>
  


  )
    
}


