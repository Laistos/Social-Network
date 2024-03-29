import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Sidebar />
        <div className={styles.component_wrapper}>
          <Routes className={styles.component_wrapper}>
            <Route path='/profile' element={<Profile postInfo={props.postInfo} />} />
            <Route path='/messages/*' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            <Route path='/music' element={<Music music={'Hey Jude!'} />} />
            <Route path='/news' element={<News text={'NEWS!'} />} />
            <Route path='/settings' element={<Settings setting={'volume = 80'} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
