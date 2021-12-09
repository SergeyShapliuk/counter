import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import Input from "./Input";
import s from './Items.module.css'


function App() {


    let [number, setNumber] = useState<number>(0)
    let [maxNumber, setMaxNumber] = useState<number>(0)
    let [startNumber, setStartNumber] = useState<number>(0)
    let [error, setError] = useState<string>('')
    let [Disabled, setDisabled] = useState<boolean>(false)
    let [message, setMessage] = useState<string>('')


    useEffect(() => {
        let valueNumber = localStorage.getItem('numbers')
        if (valueNumber) {
            let newValue = JSON.parse(valueNumber)
            setMaxNumber(newValue.maxNumber)
            setStartNumber(newValue.startNumber)
            setNumber(newValue.startNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify({maxNumber: maxNumber, startNumber: startNumber}))
    }, [maxNumber, startNumber])

    function count() {
        if (number < maxNumber) {
            setNumber(number + 1)
        }
    }

    function reset() {
        setNumber(startNumber)
        setError('')
    }

    function set() {
        setNumber(startNumber)
        setDisabled(true)
        setError('')
        setMessage('')
    }


    let onChangeInput1 = (newValue: number) => {
        if (newValue <= startNumber) {
            setError("Incorrect value!")
        } else {
            setError('')
            setMessage('enter values and press "set"')
            setDisabled(false)
        }
        setMaxNumber(newValue)
    }

    let onChangeInput2 = (newValue: number) => {
        if (newValue >= maxNumber || newValue < 0) {
            setError("Incorrect value!")
        } else {
            setError('')
            setMessage('enter values and press "set"')
            setDisabled(false)
        }
        setStartNumber(newValue)
    }
    const inputClassName = `${s.input} ${error ? s.errorInput : s.Input} `
    const outputClassName = `${ error ? s.errorNumber : s.outputNumber} ${number===maxNumber?s.errorNumber:s.outputNumber}`

    return (
        <div className="App">
            <div className={"InputBlock"}>
                <Input name={"max value:"} value={maxNumber} onChanges={onChangeInput1}
                       className={inputClassName} />
                <Input name={"start value:"} value={startNumber} onChanges={onChangeInput2}
                       className={inputClassName} />
                <Button disabled={error ? !Disabled : Disabled} onClick={set} name={"set"} className={s.buttonSet}/>
            </div>
            <div className={"OutputBlock"}>
                <span className={outputClassName}>{error ? error : number && message ? message : number}</span>
                <Button disabled={number === maxNumber ? Disabled : !Disabled} name={"inc"}  onClick={count} className={s.buttonInc}/>
                <Button disabled={!Disabled} onClick={reset} name={"res"} className={s.buttonRes}/>

            </div>
        </div>
    );
}

export default App;
