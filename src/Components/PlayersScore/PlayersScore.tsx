import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRedScore, getYellowScore } from '@/Redux/selectors/game';
import './PlayersScore.scss'


export default function PlayersScore() {
  const { t } = useTranslation();
  const redTeamScore = useSelector(getRedScore());
  const yellowTeamScore = useSelector(getYellowScore());

  return (
    <div className="playersScore">
      <h2 className="playersScore__title">{t(`titles.scores`)}</h2>
      <div className="playersScore__teamScores">
        <div className="playersScore__score">
          <h3 className="playersScore__player-name playersScore__player-name--red">{t(`players.one`)}</h3>
          <h3 className="playersScore__player-score">{redTeamScore}</h3>
        </div>
        <div className="playersScore__score">
          <h3 className="playersScore__player-name playersScore__player-name--yellow">{t('players.two')}</h3>
          <h3 className="playersScore__player-score">{yellowTeamScore}</h3>
        </div>
      </div>
    </div>
  );
};
