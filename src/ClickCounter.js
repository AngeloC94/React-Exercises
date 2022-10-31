import React from 'react';
import { useState } from 'react';
export default function ClickCounter({ initialValue = 0 }) {

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(counter + 1)
    };


    return (
        <div>
            <h2>Count : {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    );
}