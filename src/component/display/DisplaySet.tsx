import React, {useEffect} from "react";
import Input from "../input/Input";

import s from './DisplaySet.module.css'
import Button from "../button/Button";

type DisplaySetType = {
    message: string
    disabled: boolean
    maxNumber: number
    startNumber: number
    setMaxNumber: (maxNumber: number) => void
    setStartNumber: (startNumber: number) => void
    setDisabled: (disabled: boolean) => void
    setNumber: (number: number) => void
    setMessage: (message: string) => void
}

function DisplaySet({
                        message,
                        disabled,
                        maxNumber,
                        startNumber,
                        setMaxNumber,
                        setStartNumber,
                        setDisabled,
                        setNumber,
                        setMessage
                    }: DisplaySetType) {

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
        if (newValue >= maxNumber || newValue < 0) {
            setMessage("Incorrect value!")
            setDisabled(false)
        } else {
            setMessage('enter values and press "set"')
            setDisabled(false)
        }
    }
    const inputClassName = `${message === "Incorrect value!" ? s.input + ' ' + s.errorInput : s.input} `
    return (
        <div className={s.displaySet}>
            <Input name={"max value:"} value={maxNumber} onChanges={onChangeMaxValueInput}
                   className={inputClassName}/>
            <Input name={"start value:"} value={startNumber} onChanges={onChangeStartValueInput}
                   className={inputClassName}/>
            <Button disabled={message === "Incorrect value!" ? !disabled : disabled} onClick={set} name={"set"}/>
        </div>
    )
}

export default DisplaySet;