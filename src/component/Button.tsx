import React from "react";




type ButtonType={
    disabled:boolean
    onClick:()=>void
    name:string
    className?:string|undefined
}

function Button({disabled,onClick,name,className}:ButtonType){

    let onclickButton=()=>onClick()

    return<div>


  <button onClick={onclickButton} disabled={disabled} className={className}> {name} </button>

    </div>
}
export default Button;