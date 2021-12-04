import React from "react";



type ButtonType={
    disabled:boolean
    onClick:()=>void
    name:string
}



function Button(props:ButtonType){

    let onclickButton=()=>props.onClick()

    return<div>


        <button onClick={onclickButton} disabled={props.disabled}>{props.name}</button>

    </div>
}
export default Button;