import { useEffect, useRef } from "react";

const Home = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <>
        <h1>This is Home Page</h1>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <input ref={inputRef} type="text" className="form-control w-25" placeholder="Type" />
        </div>
    </>
}

export default Home;