import React from "react";
import "./App.css";
import Game from "./Game";
import { UseGameContext } from "./hooks/useGame";
import { buildGame } from "./hooks/useGame/buildGame";
import { UseGameManagerContext } from "./hooks/useGameManager";
import { buildGameManager } from "./hooks/useGameManager/buildGameManager";

function App() {
  const initGameProps = buildGame();
  const [state, setState] = React.useState(initGameProps);
  const gameManager = buildGameManager(state);
  gameManager.subscribe(setState);

  return (
    <UseGameManagerContext.Provider value={gameManager}>
      <UseGameContext.Provider value={state}>
        <Game />
      </UseGameContext.Provider>
    </UseGameManagerContext.Provider>
  );
}

export default App;
