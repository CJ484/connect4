import CurrentTurn from "./Components/CurrentTurn";
import BoardGame from "./Components/BoardGame";
import GameScore from "./Components/GameScore";

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <CurrentTurn />
      <GameScore />
      <BoardGame />
    </div>
  );
}

export default App;
