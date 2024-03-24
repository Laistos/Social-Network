import styles from './Sidebar.module.css'

function Sidebar() {
   return (
      <nav className={styles.sidebar}>
         <div className={styles.listWrapper}>
            <div><a className={styles.link} href='/profile'>Profile</a></div>
            <div><a className={styles.link} href='/messages'>Messages</a></div>
            <div><a className={styles.link} href='/music'>Music</a></div>
            <div><a className={styles.link} href='/news'>News</a></div>
            <div><a className={styles.link} href='/settings'>Settings</a></div>
         </div>
      </nav>
   )
}

export default Sidebar;