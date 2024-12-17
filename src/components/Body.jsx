import { useEffect, useState } from "react";

const Body = () => {

    let [count, setCount] = useState(1);
    let [data, setData] = useState(null);

    const increment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, []);

    return <>
        <div className="d-flex flex-column h-50 justify-content-center align-items-center gap-3 p-3">

            <h1>{count}</h1>
            <button onClick={increment} className="btn btn-danger">Increment</button>
            <ol>
                {data && data.map(user => <li key={user.id}>{user.name}</li>)}
            </ol>
        </div>
    </>
}

export default Body;