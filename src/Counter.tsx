import React, {ChangeEvent, useEffect, useState} from "react";
import Button from "./Button";

type CounterType={
    set:()=>void
    count:(number2:number)=>void
    reset:()=>void
    number:number

}
function Counter(props:CounterType){
    let [number2, setNumber2] = useState<number>(0)
    let [number3, setNumber3] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)
    let [Disabled, setDisabled] = useState<boolean>(false)
    useEffect(() => {
        let valueNumber = localStorage.getItem('numbers')
        if (valueNumber) {
            let newValue = JSON.parse(valueNumber)
            setNumber2(newValue.maxNumber)
            setNumber3(newValue.startNumber)
            //setNumber(newValue.startNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify({maxNumber: number2, startNumber: number3}))
    }, [number2, number3])

    let onClickSetButton=(number:number)=>props.set()
    let onClickIncButton=()=>props.count(number2)
    let onClickResetButton=()=>props.reset()


    let onChangeInputMax=(e:ChangeEvent<HTMLInputElement>)=> {
        setNumber2(parseInt(e.currentTarget.value))
        setError("error")
        setError("enter values and press 'set'")
        setDisabled(false)

    }
    let onChangeInputStart=(e:ChangeEvent<HTMLInputElement>)=>{
        setDisabled(false)
        setNumber3(parseInt(e.currentTarget.value))
        setError("enter values and press 'set'")
    }
    return(
        <div>
            <input type={"number"} value={number2} onChange={onChangeInputMax}   />
            <input type={"number"} value={number3} onChange={onChangeInputStart}  />
            <Button name={"set"} onClickHandler={()=>{onClickSetButton(number2)}}/>
            {error?error: props.number}
            <Button name={"inc"} onClickHandler={onClickIncButton}/>
            <Button name={"res"} onClickHandler={onClickResetButton}/>
        </div>
    )
}
export default Counter;