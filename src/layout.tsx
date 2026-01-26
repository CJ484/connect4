import { useTranslation } from 'react-i18next';
import {CurrentTurn, GameScore, BoardGame, Background, Languagelist } from './Components/index'
import './styles/global.scss'

export default function Layout() {
  const { t } = useTranslation();
  
  return (
    <div className="body">
      <Background />
      <h1 className="title">{t(`titles.main`)}</h1>
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
