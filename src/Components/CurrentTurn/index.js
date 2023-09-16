import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCurrentTurn } from '../../Redux/selectors/game';
import './styles.scss';

const CurrentTurn = () => {
  const { t } = useTranslation();
    const currentTurn = useSelector(getCurrentTurn());
  return (
    <div className='current-turn'>
      <h1>{t(`titles.currentPlayer`)}</h1>
      <h2>{currentTurn}'s {t(`players.turn`)}</h2>
      <div className='current-chip'></div>
    </div>
  ) 
};

export default CurrentTurn;