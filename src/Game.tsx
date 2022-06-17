import React from "react";
import useGame from "./hooks/useGame";

const Game: React.FC = () => {
  const game = useGame();

  return (
    <div>
      <pre>{JSON.stringify(game, null, 2)}</pre>
      <button type="button" onClick={game.init}>
        Initialize Game
      </button>
    </div>
  );
};

export default Game;
