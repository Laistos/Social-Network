import styles from './Sidebar.module.css'

function Sidebar() {
   return (
      <nav className={styles.sidebar}>
         <div className={styles.listWrapper}>
            <div><a className={styles.link} href='#'>Profile</a></div>
            <div><a className={styles.link} href='#'>Messages</a></div>
            <div><a className={styles.link} href='#'>Music</a></div>
            <div><a className={styles.link} href='#'>News</a></div>
            <div><a className={styles.link} href='#'>Settings</a></div>
         </div>
      </nav>
   )
}

export default Sidebar;