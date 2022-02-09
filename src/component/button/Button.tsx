import React from "react";
import s from './Button.module.css'




type ButtonType={
    disabled:boolean
    onClick:()=>void
    name:string
    className?:string|undefined
}

function Button({disabled,onClick,name,className}:ButtonType){

    let onclickButton=()=>onClick()

    return<div className={s.button}>


  <button onClick={onclickButton} disabled={disabled} className={className}> {name} </button>

    </div>
}
export default Button;