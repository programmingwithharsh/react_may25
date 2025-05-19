import { createContext, useContext, useState } from "react";

/*
Create multiple components in one file
With Context
C1 -> C2 -> C3 -> C4 -> C5
C1 "Namrata" -> C2 -> C3 -> C4 ->  C5 "Namrata"
*/

const UserContext = createContext(); // creating context

const WithContext = () => {
    const [username, setUsername] = useState("Namrata"); // default username is Namrata
    return (<>
        <h1>With Context Example</h1>
        <div>In Component 1, username is {username}</div>
        <UserContext.Provider value={username}>
            <C2 />
        </UserContext.Provider>
    </>);
}


const C2 = () => {
    return <>
        <C3 />
    </>
}

const C3 = () => {
    return <>
        <C4 />
    </>
}

const C4 = () => {
    return <>
        <C5 />
    </>
}

const C5 = () => {
    const username = useContext(UserContext); // using context, this context is having username
    return <>
        <div>In Component 5, username is {username}</div>
    </>
}

export default WithContext;