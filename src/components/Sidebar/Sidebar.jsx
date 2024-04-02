import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar() {
   return (
      <nav className={styles.sidebar}>
         <div className={styles.listWrapper}>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/profile' >Profile</NavLink>
            </div>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/messages' >Messages</NavLink>
            </div>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/music' >Music</NavLink>
            </div>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/news'>News</NavLink>
            </div>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/settings'>Settings</NavLink>
            </div>
            <div className={styles.link}>
               <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/friends'>Friends</NavLink>
            </div>
         </div>
      </nav >
   )
}

export default Sidebar;