import {Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Sidebar/>
            <div className={styles.component_wrapper}>
                <Routes className={styles.component_wrapper}>
                    <Route path='/profile'
                           element={<Profile />}/>
                    <Route path='/messages/*'
                           element={<DialogsContainer/>}/>
                    <Route path='/music' element={<Music music={'Hey Jude!'}/>}/>
                    <Route path='/news' element={<News text={'NEWS!'}/>}/>
                    <Route path='/settings' element={<Settings setting={'volume = 80'}/>}/>
                    {/*<Route path='/friends' element={<Friends friends={props.state.friendsPage}/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
