import { GetCurrentTurn } from '../../const/selectors/currentTurn';
import './styles.css';


const CurrentTurn = () => {
    const currentTurn = GetCurrentTurn();
  return (
    <div className='currentTurn'>
      <h1>CurrentTurn</h1>
      <h2>{currentTurn}'s Turn</h2>
    </div>
  ) 
};

export default CurrentTurn;