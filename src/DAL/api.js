import axios from "axios";

const apiURL = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (users, setUsers, setUsersTotalCount, pageNumber, usersCount) => {
    axios.get(`${apiURL}users?page=${pageNumber}&count=${usersCount}`).then((response) => {
        setUsers(response.data.items)
        setUsersTotalCount(response.data.totalCount)
    })
}