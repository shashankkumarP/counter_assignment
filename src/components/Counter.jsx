import React,{useState} from "react";

export default function Counter()
{
    const [count,setCount] = useState(0);
   
    
   
    
    return(
        <div>
            <h1>Counter: <span style={{color:count%2==0 ? "green":"red"}}>{count}</span></h1>
            <button onClick={()=>setCount(count+1) }>Increment</button>
            <button onClick={()=> count!=0 ? setCount(count-1):null}>Decrement</button>
            <button onClick={()=>setCount(count+count)}>Double</button>
           
           
        </div>
    )
}