import React, {useState} from 'react'

export default function Updater() {

    const [count, setCount] = useState(0);

    function IncreaseCount (){
        setCount(c => c+100000000000000000000000000000000000000000000000);
        setCount(c => c+10000000000000000000000000000000000000000000);
        setCount(c => c+1999999999999999999999999999999999999999);
    }

    function DecreaseCount (){
        setCount(count-1);
    }

    function ResetCount (){
        setCount(0);
    }

    return (
    <div>
        <h1>Count: {count}</h1>
        <input type="button" value="Increase" onClick={IncreaseCount} />
        <input type="button" value="Decrease" onClick={DecreaseCount} />
        <input type="button" value="Reset" onClick={ResetCount} />
    </div>
  )
}
