import React from "react";



type ButtonType={
    name:string
    onClickHandler:()=>void
}


function Button(props:ButtonType){

   let onclickButton=()=>props.onClickHandler()


    return(
        <div>
            <button onClick={onclickButton}>{props.name}</button>

        </div>
    )
}
export default Button;