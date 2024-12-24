import { useEffect, useRef, forwardRef } from "react";

const Home = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleClick = ()=>{
        console.log(inputRef.current.value);
    }

    return <>
        <h1>This is Home Page</h1>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <Input ref={inputRef} placeholder="Search" />
            <button onClick={handleClick} className="btn btn-primary">Submit</button>
        </div>
    </>
}

const Input = forwardRef(( props, ref)=>{
        return <>
            <input ref={ref} type="text" className="form-control w-25" placeholder={props.placeholder} />
        </>
});

export default Home;