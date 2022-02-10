import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import DisplaySetWithRedux from "./component/display/DisplaySetWithRedux";
import DisplayWithRedux from "./component/display/DisplayWithRedux";


function AppWithRedux() {
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const message = useSelector<AppRootStateType, string>(state => state.counter.message)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.counter.disabled)
    return (
        <div className="App">

            <DisplaySetWithRedux message={message}
                        startNumber={startValue}
                        maxNumber={maxValue}
                        disabled={disabled}/>

            <DisplayWithRedux number={value}
                     startNumber={startValue}
                     maxNumber={maxValue}
                     disabled={disabled}
                     message={message}/>

        </div>
    );
}

export default AppWithRedux;
