import {CurrentTurn, GameScore, BoardGame, Background, Header } from './Components/index'
import './styles/global.scss'

export default function Layout() {
  
  return (
    <div className="body">
      <Background />
      <Header />
          <CurrentTurn />
          <GameScore />
        <BoardGame />
      </div>
  );
}
