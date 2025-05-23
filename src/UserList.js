import { useEffect, useState } from "react";
const UserList = () => {
    const [users, setUsers] = useState([{ "name": "Poorti", "email": "Poorti@gmail.com" }]); // users is empty array

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                console.log("API Response", data);
                console.log("Programming with Harsh");
                setUsers(data);
            } catch (error) {
                console.log('Fetch Error', error)
            }
        }
        fetchData();
    }, []) // empty array

    return <div>
        <h2>Users List</h2>
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
}

export default UserList;