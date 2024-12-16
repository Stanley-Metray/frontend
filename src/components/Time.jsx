import { useState } from "react";

const Time = (props)=>{
    let [time, setTime] = useState(new Date().toLocaleTimeString());
    
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return <>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <h1>{time}</h1>
        </div>
    </>
}

export default Time;