const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users:[],
    count: 5,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
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
                users: [...action.users],
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setPageAC = (page) => ({type: SET_PAGE, page})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer