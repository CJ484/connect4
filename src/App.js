import './App.styles.css'
import {CurrentTurn, GameScore, BoardGame } from './Components/index'

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div className='game'>
        <div className="sidePanel">
          <CurrentTurn />
          <GameScore />
        </div>
        <BoardGame />
      </div>
    </div>
  );
}

export default App;
