import axios from "axios";

const apiURL = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (users, setUsers) => {
    if (users.length === 0){
        axios.get(`${apiURL}users`).then((response) => {
            setUsers(response.data.items)
        })
    }
}