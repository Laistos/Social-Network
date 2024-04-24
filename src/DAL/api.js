import axios from "axios";

export const getUsers = (users, setUsers) => {
    if (users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            setUsers(response.data.items)
        })
    }
}