import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";


function App(props: any) {

    let [Disabled, setDisabled] = useState<boolean>(false)
    let [number, setNumber] = useState<number>(0)
    let [number2, setNumber2] = useState<number>(0)
    let [number3, setNumber3] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let valueNumber = localStorage.getItem('numbers')
        if (valueNumber) {
            let newValue = JSON.parse(valueNumber)
            setNumber2(newValue.maxNumber)
            setNumber3(newValue.startNumber)
            setNumber(newValue.startNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify({maxNumber: number2, startNumber: number3}))
    }, [number2, number3])

    function count() {
        if (number < number2) {
            setNumber(number + 1)
        } else {
            setError("error")
        }
    }

    function reset() {
        setNumber(number3)
    }

    function num() {
        setNumber(number3)
        setDisabled(true)
        setError("")
    }

    let onChangeInput1 = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber2(parseInt(e.currentTarget.value))
        setError("error")
        setError("enter values and press 'set'")
        setDisabled(false)

    }
    let onChangeInput2 = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setNumber3(parseInt(e.currentTarget.value))
        setError("enter values and press 'set'")
    }
    return (
        <div className="App">
            <input type={"number"} value={number2} onChange={onChangeInput1}/>

            <input type={"number"} value={number3} onChange={onChangeInput2}/>
            <Button disabled={Disabled} onClick={num} name={"set"}/>
            {error ? error : number}
            <Button disabled={number === number2 ? Disabled : !Disabled} onClick={count} name={"inc"}/>
            <Button disabled={!Disabled} onClick={reset} name={"res"}/>


        </div>
    );
}

export default App;
