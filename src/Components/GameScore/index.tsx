import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRedScore, getYellowScore } from '@/Redux/selectors/game';
import './styles.scss'


const GameScore = () => {
  const { t } = useTranslation();
  const redTeamScore = useSelector(getRedScore());
  const yellowTeamScore = useSelector(getYellowScore());

  return (
    <div className="gameScore">
      <h2 className="gameScore__title">{t(`titles.scores`)}</h2>
      <div className="gameScore__teamScores">
        <div className="gameScore__score">
          <h3 className="gameScore__player-name gameScore__player-name-red">{t(`players.one`)}</h3>
          <h3 className="gameScore__player-score">{redTeamScore}</h3>
        </div>
        <div className="gameScore__score">
          <h3 className="gameScore__player-name gameScore__player-name-yellow">{t('players.two')}</h3>
          <h3 className="gameScore__player-score">{yellowTeamScore}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameScore;
