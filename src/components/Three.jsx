import { useContext } from 'react';
import { FirstName, LastName } from './One';

const Three = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return <>
        <h1>This is an example of contextApi</h1>
        <h1>Data from context api: {fname} {lname}</h1>
    </>
}

export default Three;