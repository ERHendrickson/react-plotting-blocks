
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import styles from '../src/components/Styles/style.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.navMain}>
        <Navigation/>
        <Main >
          <div className={styles.mainSub}>
            <SubContents/>
            <SubContents/>
            <SubContents/>
          </div>
            <Advertisement/>
        </Main>
      </div>
    </div>
  );
}

export default App;
