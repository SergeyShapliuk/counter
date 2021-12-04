import React, { useState} from 'react';
import './App.css';
import Counter from "./Counter";


function App(props:any) {

    let [number, setNumber] = useState<number>(0)







    function count(number:number) {
        if (number>props.number2) {
            setNumber(number + 1)

        }
    }

    function reset() {
        setNumber(0)
    }

    function set() {
         //setNumber(number3)
    }


    return (
        <div className="App">

            <Counter set={set}
                     count={count}
                     reset={reset}
                     number={number}


           />


        </div>
    );
}

export default App;
