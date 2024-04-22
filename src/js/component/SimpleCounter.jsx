import React, { useState, useEffect } from "react";

export const SimpleCounter = () => {
    //1.js
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [status, setStaus] = useState({
        text: 'start',
        background: 'alert alert-primary',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
            </svg>
        ),
    })

    const handleStart = () => {
        setIsRunning(!isRunning)
        // if (!isRunning) {
        // setIsRunning(true)
        // interval()
        setStaus({
            text: 'go',
            background: 'alert alert-success',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
          </svg>
          ),
            textTitle: 'chrono'
        })
    }

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStaus({
            text: 'start',
            background: 'alert alert-primary',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
            ),
            textTitle: 'chronometer'
        })
    }

    useEffect(() => {
        if (isRunning) { // Si isRunning(true), ejecutamete el set interval y añademe 1 al counter cada vez que itere
            const newInterval = setInterval(() => {
                setCounter((counter) => counter + 1) //aquí le paaso como parámeto el counter y le digo que usme 1 cada vez que itere
            }, 10);
            return () => clearInterval(newInterval)

        }
    }, [isRunning])// Aquí le digo que cuando se ejecute y cambie el valor de isRunnig, se ejecture el useEffect. Lo que es lo mismo, cuando pulse el botón handdleStart, se ejecutará.




    //2. return
    return (
        <div className="container">
            <h1 className="text-center">{status.textTitle} </h1>
            <h2 className={status.background} style={{ display: 'flex', justifyContent: 'center' }} > {status.text} </h2>
            <div className="container background">
                <div>{status.icon}</div>
                <div>{Math.floor(counter / 100000000 % 10)}</div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>,</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter / 1 % 10)}</div>
            </div>

            <div className="text-center mt-2">
                <button onClick={handleStart} type="button" className="btn btn-outline-success fw-bold">
                    {/* {isRunning ? 'Pause' : 'Start'}  en este ternario, le estoy diciendo que si está corriendo, me muestre pause, y que si está parado, muestre Start  */}
                    {isRunning ? 'Pause' : counter === 0 ? 'Start' : 'Continue'}
                </button> 
                <button onClick={handleReset} type="button" className="btn btn-outline-danger fw-bold">Reset</button>
            </div>

        </div>
    )


}