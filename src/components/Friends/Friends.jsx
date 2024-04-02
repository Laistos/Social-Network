import styles from './Friends.module.css'
import { FriendsItem } from './FriendsItem/FriendsItem'

export const Friends = (props) => {
   let friendsElemet = props.friends.friends.map((friend) => { return <FriendsItem name={friend.name} id={friend.id} /> })
   return (
      <div className={styles.wrapper}>
         <div className={styles.friends_list}>{friendsElemet}</div>
      </div>
   )
}