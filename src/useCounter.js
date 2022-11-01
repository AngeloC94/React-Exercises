import { useState } from "react"
function useCounter(){
    const [counter, setCounter] = useState(0)

    function handleIncrement(){
        setCounter((c) => c + 1)
    }

    function handleDecrement(){
        setCounter((c) => c - 1)
    }

    function resetButton() {
        setCounter(0)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: resetButton
    }
}

export default function CustomCounter(){

    const {counter, onIncrement, onDecrement, onReset} = useCounter()

    return (
        <div style={{display: 'flex'}} >
            <button onClick={onDecrement} >-</button>
            <h1 >{counter}</h1>
            <button onClick={onIncrement} >+</button>
            <button onClick={onReset} >RESET</button>
        </div>
    )
}