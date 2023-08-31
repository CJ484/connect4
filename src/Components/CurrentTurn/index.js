import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCurrentTurn } from '../../const/selectors/game';
import './styles.css';

const CurrentTurn = () => {
  const { t } = useTranslation();
    const currentTurn = useSelector(getCurrentTurn());
  return (
    <div className='currentTurn'>
      <h1>{t(`titles.currentPlayer`)}</h1>
      <h2>{currentTurn}'s Turn</h2>
    </div>
  ) 
};

export default CurrentTurn;