const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {id: 1, followed: false, avatar: 'https://i.pinimg.com/564x/b2/81/ff/b281ff729f1b0b37d37d0d4400635912.jpg', name: 'Akezhan', status: 'i love React', location: {country: 'Kazakhstan', city: 'Almaty'}},
        {id: 2, followed: false, avatar: 'https://i.pinimg.com/564x/b2/81/ff/b281ff729f1b0b37d37d0d4400635912.jpg', name: 'Alisher', status: 'i love R6', location: {country: 'Kazakhstan', city: 'Almaty'}},
        {id: 3, followed: true, avatar: 'https://i.pinimg.com/564x/b2/81/ff/b281ff729f1b0b37d37d0d4400635912.jpg', name: 'Alimzhan', status: 'i love Meme', location: {country: 'Kazakhstan', city: 'Semey'}},
        {id: 4, followed: true, avatar: 'https://i.pinimg.com/564x/b2/81/ff/b281ff729f1b0b37d37d0d4400635912.jpg', name: 'Alisher', status: 'i love Zhanel', location: {country: 'Kazakhstan', city: 'Semey'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })]
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer