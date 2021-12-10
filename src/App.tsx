import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import Input from "./Input";
import s from './Items.module.css'


function App() {

    let [number, setNumber] = useState<number | null>(null)
    let [maxNumber, setMaxNumber] = useState<number>(0)
    let [startNumber, setStartNumber] = useState<number>(0)
   // let [message, setMessage] = useState<string>('')
    let [error, setError] = useState<string>('enter values and press "set"')
    let [Disabled, setDisabled] = useState<boolean>(false)



    useEffect(() => {
        let valueNumber = localStorage.getItem('numbers')
        if (valueNumber) {
            let newValue = JSON.parse(valueNumber)
            setMaxNumber(newValue.maxNumber)
            setStartNumber(newValue.startNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify({maxNumber: maxNumber, startNumber: startNumber}))
    }, [maxNumber, startNumber])

    function increment() {
        if (number && number < maxNumber) {
            setNumber(number + 1)
        }else {
            setDisabled(false)
        }
    }

    function reset() {
        setNumber(startNumber)
        setError('')
    }

    function set() {
        setNumber(startNumber)
        setError('')
        setDisabled(true)



    }

    let onChangeMaxValueInput = (newValue: number) => {
        setMaxNumber(newValue)
        if (newValue <= startNumber) {
            setError("Incorrect value!")
        } else {
            setError('enter values and press "set"')
            setDisabled(false)
        }
    }

    let onChangeStartValueInput = (newValue: number) => {
        setStartNumber(newValue)
        if (newValue >= maxNumber || newValue < 0) {
            setError("Incorrect value!")
        } else {
            setError('enter values and press "set"')
            setDisabled(false)
        }
    }
    const inputClassName = `${error ? s.input + ' ' + s.errorInput : s.input} `
    const outputClassName = `${ number===maxNumber ? s.MaxNumber : s.outputNumber} `
    const messageClassName=`${error?s.outputNumber+ ' '+s.errorNumber:s.outputNumber}`

    return (
        <div className="App">
            <div className={"InputBlock"}>
                <Input name={"max value:"} value={maxNumber} onChanges={onChangeMaxValueInput}
                       className={inputClassName} />
                <Input name={"start value:"} value={startNumber} onChanges={onChangeStartValueInput}
                       className={inputClassName} />
                <Button disabled={Disabled} onClick={set} name={"set"} className={s.buttonSet}/>
            </div>
            <div className={"OutputBlock"}>

                {error ? <div className={messageClassName}>{error}</div> :
                     <div className={outputClassName}>{number}</div>
                }

                <Button disabled={number === maxNumber ? Disabled : !Disabled} name={"inc"}  onClick={increment} className={s.buttonInc}/>
                <Button disabled={!Disabled} onClick={reset} name={"res"} className={s.buttonRes}/>

            </div>
        </div>
    );
}

export default App;
