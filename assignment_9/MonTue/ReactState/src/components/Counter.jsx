import React, {useState,useEffect} from "react";

const Counter = ({count,setCount,value,setValue}) => {
    
    useEffect(() => {
        const savedCount = localStorage.getItem("count");
        if (savedCount) {
          setCount(parseInt(savedCount));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("count", count);
      }, [count]);


    return (
        <div>
            <h1>{count}</h1>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
            <button onClick={() => setCount(count + value)}>Increment</button>
            <button onClick={() => setCount(count - value)}>Decrement</button>
        </div>
    );
}

export default Counter;