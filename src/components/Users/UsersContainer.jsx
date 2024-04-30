import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/reducer/usersReducer";
import Users from "./Users";
import {getUsers} from "../../DAL/api";
import Preloader from "../common/Preloader";


class UsersClass extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            getUsers(this.props.setUsers, this.props.setUsersTotalCount, this.props.currentPage, this.props.count, this.props.toggleIsFetching)
        }
    }

    onUsersChange = (page) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(page)
        getUsers(this.props.setUsers, this.props.setUsersTotalCount, page, this.props.count, this.props.toggleIsFetching)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.count)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onUsersChange={this.onUsersChange}
                       slicedPages={slicedPages}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       currentPage={this.props.currentPage}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer