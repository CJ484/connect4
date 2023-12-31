import { useTranslation } from 'react-i18next';
import Languagelist from './Components/LanguageList';
import {CurrentTurn, GameScore, BoardGame } from './Components/index'
import './App.styles.scss'

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t(`titles.main`)}</h1>
      <Languagelist />
      <div className='game'>
        <div className="side-panel">
          <CurrentTurn />
          <GameScore />
        </div>
        <BoardGame />
      </div>
    </div>
  );
}

export default App;
