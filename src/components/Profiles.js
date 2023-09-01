
import {useEffect, useState} from "react";
import UserData from "../components/UserData.js";
import "./table.css";
const API = "https://codeforces.com/api/user.info?handles=Dominater069;Yuki726;RahulChugh;idealover;hackerbhaiya;Rimuru.123;When_Brain_Ded;bbiswabasu;HoImes7;Gr47;";
//const API="https://jsonplaceholder.typicode.com/users";
const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.result && data.result.length > 0) {
                const userObjects = data.result; // Extract user objects from the API response
                setUsers(userObjects);
            }
            
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])

    return <>
        <table>
            <thead>
            <tr>

                <th>Country</th>
                <th>Username</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}

export default App;