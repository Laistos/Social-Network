import styles from './Friends.module.css'
import { FriendsItem } from './FriendsItem/FriendsItem'

const Friends = (props) => {
   let friendsElement = props.friends.friends.map((friend) => { return <FriendsItem name={friend.name} id={friend.id} /> })
   return (
      <div className={styles.wrapper}>
         <div className={styles.friends_list}>{friendsElement}</div>
      </div>
   )
}

export default Friends