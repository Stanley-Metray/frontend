import { createContext } from "react";
import Two from "./Two";

const FirstName = createContext();
const LastName = createContext();

const One = ()=>{
    return <>
        <FirstName.Provider value="Jatin">
            <LastName.Provider value="Lalit">
                <Two/>
            </LastName.Provider>
        </FirstName.Provider>
    </>
}

export default One;
export {FirstName, LastName};