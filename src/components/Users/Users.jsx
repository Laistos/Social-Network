import React from "react";
import styles from "./Users.module.css";
import avatar from "../../images/user-avatar/avatar.jpg";
import {getUsers} from "../../DAL/api";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            getUsers(this.props.users, this.props.setUsers, this.props.setUsersTotalCount,this.props.currentPage, this.props.count)
        }
    }

    onUsersChange = (page) => {
        this.props.setPage(page)
        getUsers(this.props.users, this.props.setUsers, this.props.setUsersTotalCount, page, this.props.count)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.count)
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div className={styles.wrapper}>
                <div>
                    {slicedPages.map((page) => <button onClick={() => this.onUsersChange(page)} className={this.props.currentPage === page && styles.selectedPage}>{page}</button>)}
                </div>
                {
                    this.props.users.map((u) => <div className={styles.wrapper} key={u.id}>
                            <div className={styles.flex_container}>
                                <div className={styles.avatar}>
                                    <img className={styles.image} src={u.photos.small != null ? u.photos.small : avatar}
                                         alt="avatar"/>
                                </div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }} className={styles.button}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }} className={styles.button}>Follow</button>}
                            </div>
                            <div className={styles.grid_container}>
                                <div className={styles.item_1}>
                                    <div className={styles.name}>{u.name}</div>
                                    <div className={styles.name}>{u.status}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users