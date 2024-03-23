import './Sidebar.css'

const Sidebar = () => {
   return (
      <nav className='app-sidebar'>
         <div>
            <div><a href='#'>Profile</a></div>
            <div><a href='#'>Messages</a></div>
            <div><a href='#'>Music</a></div>
            <div><a href='#'>News</a></div>
            <div><a href='#'>Settings</a></div>
         </div>
      </nav>
   )
}

export default Sidebar;