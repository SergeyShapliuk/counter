 import React, {ChangeEvent} from "react";




type InputType={
    value:number
    onChanges:(newValue:number)=>void
    className?:string|undefined
    name:string
}

function Input({value,onChanges,className,name}:InputType){

    const onChange=(e: ChangeEvent<HTMLInputElement>)=>{
        let newValue=JSON.parse(e.currentTarget.value)
        onChanges(newValue)
    }
    return<div>

       {name} <input type={"number"} value={value} onChange={onChange} className={className} />

    </div>
}
export default Input;