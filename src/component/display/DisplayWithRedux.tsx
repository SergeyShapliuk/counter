import React from "react";
import Button from "../button/Button";
import s from './Display.module.css'
import {useDispatch} from "react-redux";
import {disabledCounter, incValueCounter, messageCounter, resValueCounter} from "../../state/counterReducer";


type DisplayType = {
    number: number
    startNumber: number
    maxNumber: number
    disabled: boolean
    message: string
}

function DisplayWithRedux({number, startNumber, maxNumber, message, disabled}: DisplayType) {

    const dispatch = useDispatch();

    function increment() {
        if (number < maxNumber) {
            dispatch(incValueCounter())
        } else {
            dispatch(disabledCounter(false))

        }
    }
    function reset() {

        dispatch(resValueCounter())
        dispatch(messageCounter(''))
        // setNumber(startNumber)
        // setMessage('')
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

export default DisplayWithRedux;