import './Profile.css'

const Profile = () => {
   return (
      <div className='main-wrapper'>
         <div className='main-image-wrapper'>
            <img className='main-image' src='https://w.wallha.com/ws/14/oOKSTL6W.jpg' alt='#' />
         </div>
         <div className='main-user'>
            <div className='user-avatar'>
               <img className='avatar' src='https://i.pinimg.com/564x/0b/43/6f/0b436f89570588b544edd671511c3b55.jpg' alt='#' />
            </div>
            <div className='user-info'>
               <div className='user-name'>Akezhan Sotsial</div>
               <div className='user-date'>7 may</div>
               <div className='user-city'>Almaty</div>
               <div className='user-education'>IITU</div>
            </div>
         </div>
         <div>
            MyPosts
            <div>New post</div>
            <div>
               Posts
               <div>post1</div>
               <div>post2</div>
            </div>
         </div>
      </div>
   )
}

export default Profile