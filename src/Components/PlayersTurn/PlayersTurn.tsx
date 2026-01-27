import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCurrentTurn } from '@/Redux/selectors/game';
import './PlayersTurn.scss';

export default function PlayersTurn() {
  const { t } = useTranslation();
    const currentTurn = useSelector(getCurrentTurn());
  return (
    <div className='playersTurn'>
      <h2 className="playersTurn__title">{t(`titles.currentPlayer`)}</h2>
      <h2 className="playersTurn__player-name">{currentTurn}'s {t(`players.turn`)}</h2>
      <div className='playersTurn__chip'></div>
    </div>
  ) 
};

