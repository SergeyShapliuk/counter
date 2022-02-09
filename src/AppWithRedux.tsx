import React, {useState} from 'react';
import './App.css';
import DisplaySet from "./component/display/DisplaySet";
import Display from "./component/display/Display";
import {useDispatch, useSelector} from "react-redux";


function App() {
    let [number, setNumber] = useState<number>(0)
    let [maxNumber, setMaxNumber] = useState<number>(0)
    let [startNumber, setStartNumber] = useState<number>(0)
    let [message, setMessage] = useState<string>('enter values and press "set"')
    let [disabled, setDisabled] = useState<boolean>(false)
    const state=useSelector(state => state)
    const dispatch=useDispatch();
    return (
        <div className="App">

            <DisplaySet message={message}
                        disabled={disabled}
                        maxNumber={maxNumber}
                        startNumber={startNumber}
                        setMaxNumber={setMaxNumber}
                        setStartNumber={setStartNumber}
                        setDisabled={setDisabled}
                        setNumber={setNumber}
                        setMessage={setMessage}/>

            <Display number={number}
                     maxNumber={maxNumber}
                     message={message}
                     startNumber={startNumber}
                     disabled={disabled}
                     setNumber={setNumber}
                     setDisabled={setDisabled}
                     setMessage={setMessage}/>

        </div>
    );
}

export default App;
