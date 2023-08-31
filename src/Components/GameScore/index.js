import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRedScore, getYellowScore } from '../../const/selectors/game';
import './styles.css'


const GameScore = () => {
  const { t } = useTranslation();
  const redTeamScore = useSelector(getRedScore());
  const yellowTeamScore = useSelector(getYellowScore());

  return (
    <div className="gameScore">
      <h1>{t(`titles.scores`)}</h1>
      <div className="teamScores">
        <div className="score">
          <h1>{t(`players.one`)}</h1>
          <h2>{redTeamScore}</h2>
        </div>
        <div className="score">
          <h1>{t('players.two')}</h1>
          <h2>{yellowTeamScore}</h2>
        </div>
      </div>
    </div>
  );
};

export default GameScore;
