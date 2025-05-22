import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    const incrementAlert = () => {
        alert("Incremented by 1");
    }

    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <button onClick={()=>{increment(); incrementAlert();}}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Count: {count}</p>
        </div>
    );
}