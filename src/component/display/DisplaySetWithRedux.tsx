import React from "react";
import Input from "../input/Input";
import s from './DisplaySet.module.css'
import Button from "../button/Button";
import {useDispatch} from "react-redux";
import {
    disabledCounter,
    maxValueInputCounter,
    messageCounter,
    setValueCounter,
    startValueInputCounter
} from "../../state/counterReducer";

type DisplaySetType = {
    message: string
    startNumber: number
    maxNumber: number
    disabled: boolean

}

function DisplaySetWithRedux({message, startNumber, maxNumber, disabled}: DisplaySetType) {

    // useEffect(() => {
    //     let valueNumber = localStorage.getItem('numbers')
    //     if (valueNumber) {
    //         let newValue = JSON.parse(valueNumber)
    //         setMaxNumber(newValue.maxNumber)
    //         setStartNumber(newValue.startNumber)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('numbers', JSON.stringify({maxNumber: maxNumber, startNumber: startNumber}))
    // }, [maxNumber, startNumber])

    const dispatch = useDispatch();

    function set() {
        dispatch(setValueCounter())
        dispatch(messageCounter(''))
        dispatch(disabledCounter(true))
        // setNumber(startNumber)
        // setMessage('')
        // setDisabled(true)
    }

    let onChangeMaxValueInput = (newValue: number) => {
        dispatch(maxValueInputCounter(newValue))
        // setMaxNumber(newValue)
        if (newValue <= startNumber) {
            dispatch(messageCounter("Incorrect value!"))
            dispatch(disabledCounter(false))
            // setMessage("Incorrect value!")
            // setDisabled(false)
        } else {
            dispatch(messageCounter('enter values and press "set"'))
            dispatch(disabledCounter(false))
            // setMessage('enter values and press "set"')
            // setDisabled(false)
        }
    }

    let onChangeStartValueInput = (newValue: number) => {
        dispatch(startValueInputCounter(newValue))
        // setStartNumber(newValue)
        if (newValue >= maxNumber || newValue < 0) {
            dispatch(messageCounter("Incorrect value!"))
            dispatch(disabledCounter(false))
            // setMessage("Incorrect value!")
            // setDisabled(false)
        } else {
            dispatch(messageCounter('enter values and press "set"'))
            dispatch(disabledCounter(false))
            // setMessage('enter values and press "set"')
            // setDisabled(false)
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

export default DisplaySetWithRedux;