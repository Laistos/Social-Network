import styles from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <div className={styles.component_wrapper}>
        {/* <Profile /> */}
        <Dialogs message={'Hey!'} />
      </div>
    </div>
  );
}

export default App;
