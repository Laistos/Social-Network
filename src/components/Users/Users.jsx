import styles from './Users.module.css'
import React from 'react'
import axios from "axios";
import avatar from '../../images/user-avatar/avatar.jpg'

const Users = (props) => {

    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)
        })
    }


    return (
        <div className={styles.wrapper}>
            {
                props.users.map((u) => <div className={styles.wrapper} key={u.id}>
                        <div className={styles.flex_container}>
                            <div className={styles.avatar}>
                                <img className={styles.image} src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
                            </div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }} className={styles.button}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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

export default Users