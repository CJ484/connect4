import { GetRedScore, GetYellowScore } from '../../const/selectors/scores';
import './styles.css'


const GameScore = () => {
  const redTeamScore = GetRedScore();
  const yellowTeamScore = GetYellowScore();

  return (
    <div className="gameScore">
      <h1>Scores</h1>
      <div className="teamScores">
        <div className="score">
          <h1>Red</h1>
          <h2>{redTeamScore}</h2>
        </div>
        <div className="score">
          <h1>Yellow</h1>
          <h2>{yellowTeamScore}</h2>
        </div>
      </div>
    </div>
  );
};

export default GameScore;
