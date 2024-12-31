import { useNavigate } from "react-router-dom";

const Error = ()=>{
    const navigate = useNavigate();
    return <>
        <h1>404 Error, page not found</h1>
        <button onClick={()=> navigate(-1)} className="btn btn-primary">Back</button>
    </>
}

export default Error;