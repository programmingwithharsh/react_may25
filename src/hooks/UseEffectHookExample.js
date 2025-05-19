import { useState, useEffect } from 'react';

function UseEffectHookExample() {
    const [data, setData] = useState([{ name: "Bhanu Kiran" }]); // data is empty array
    /* 
    Functional Component 
        data is empty array
        setData method which we use to update data

    Class Component 
        this.state = {}
        thi.setState({})
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET"
        })
            .then((response) => response.json()) // 1st then
            .then((json) => { // 2nd then (Promise chaining)
                console.log("API Response", json);
                setData(json); // to update state
            });
    }, [])


    return (<>
        <h1>Display userlist using useEffect Hook Example</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </>);
}

export default UseEffectHookExample;