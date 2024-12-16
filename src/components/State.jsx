import { useEffect, useState } from "react";

const State = ()=>{
    let [count, setCount] = useState(1);

    const increment = ()=>{
        setCount(count + 1);
    }

    useEffect(()=>{
        console.log(count);
    }, [count]);

    return <>
        <div className="h-50 p-3 d-flex flex-column justify-content-center align-items-center">
            <h1>{count}</h1> <br/>
            <button className="btn btn-primary" onClick={increment}>Click Me</button>
        </div>
    </>
}

export default State;