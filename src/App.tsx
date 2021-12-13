import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./component/Button";
import Input from "./component/Input";
import s from './component/Items.module.css'


function App() {

    let [number, setNumber] = useState<number>(0)
    let [maxNumber, setMaxNumber] = useState<number>(0)
    let [startNumber, setStartNumber] = useState<number>(0)
    let [message, setMessage] = useState<string>('enter values and press "set"')
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
        if (number < maxNumber) {
            setNumber(number + 1)
        }else  {
            setDisabled(false)
        }
    }

    function reset() {
        setNumber(startNumber)
        setMessage('')
    }

    function set() {
        setNumber(startNumber)
        setMessage('')
        setDisabled(true)



    }

    let onChangeMaxValueInput = (newValue: number) => {
        setMaxNumber(newValue)
        if (newValue <= startNumber) {
            setMessage("Incorrect value!")
            setDisabled(false)
        } else {
            setMessage('enter values and press "set"')
            setDisabled(false)
        }
    }

    let onChangeStartValueInput = (newValue: number) => {
        setStartNumber(newValue)
        if (newValue >= maxNumber || newValue<0) {
            setMessage("Incorrect value!")
            setDisabled(false)
        } else {
            setMessage('enter values and press "set"')
            setDisabled(false)
        }
    }
    const inputClassName = `${message==="Incorrect value!"? s.input + ' ' + s.errorInput : s.input} `
    const outputClassName = `${ number===maxNumber ? s.MaxNumber : s.outputNumber} `
    const messageClassName=`${message==="Incorrect value!"?s.outputNumber+ ' '+s.errorNumber:s.outputNumber}`

    return (
        <div className="App">
            <div className={"DisplaySet"}>
                <Input name={"max value:"} value={maxNumber} onChanges={onChangeMaxValueInput}
                       className={inputClassName} />
                <Input name={"start value:"} value={startNumber} onChanges={onChangeStartValueInput}
                       className={inputClassName} />
                <Button disabled={message==="Incorrect value!"?!Disabled:Disabled} onClick={set} name={"set"} className={s.button}/>
            </div>
            <div className={"DisplayOut"}>

                {message ? <div className={messageClassName}>{message}</div> :
                     <div className={outputClassName}>{number}</div>
                }

                <Button disabled={number === maxNumber ? Disabled : !Disabled} name={"inc"}  onClick={increment} className={s.button}/>
               <Button disabled={!Disabled} onClick={reset} name={"res"} className={s.button}/>

            </div>
        </div>
    );
}

export default App;
