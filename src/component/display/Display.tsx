import React from "react";
import Button from "../button/Button";
import s from './Display.module.css'


type DisplayType = {
    number: number
    maxNumber: number
    message: string
    startNumber: number
    disabled: boolean
    setNumber: (number: number) => void
    setDisabled: (disabled: boolean) => void
    setMessage: (message: string) => void
}

function Display({
                     number, maxNumber, message,
                     startNumber, disabled, setNumber, setDisabled,
                     setMessage
                 }: DisplayType) {

    function increment() {
        if (number < maxNumber) {
            setNumber(number + 1)
        } else {
            setDisabled(false)
        }
    }

    function reset() {
        setNumber(startNumber)
        setMessage('')
    }

    const outputClassName = `${number === maxNumber ? s.maxNumber : s.outputNumber} `
    const messageClassName = `${message === "Incorrect value!" ? s.outputNumber + ' ' + s.errorNumber : s.outputNumber}`
    return (
        <div className={s.display}>
            <div className={s.text}>
                {message ? <div className={messageClassName}>{message}</div> :
                    <div className={outputClassName}>{number}</div>
                }
            </div>

                <Button disabled={number === maxNumber ? disabled : !disabled} name={"inc"} onClick={increment}/>
                <Button disabled={!disabled} onClick={reset} name={"res"}/>



        </div>

    )
}

export default Display;