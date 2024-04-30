import axios from "axios";

const apiURL = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (setUsers, setUsersTotalCount, pageNumber, usersCount, toggleIsFetching) => {
    axios.get(`${apiURL}users?page=${pageNumber}&count=${usersCount}`).then((response) => {
        toggleIsFetching(false)
        setUsers(response.data.items)
        setUsersTotalCount(response.data.totalCount)
    })
}