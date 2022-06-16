import React from "react";
import "./App.css";
import { buildGame } from "./hooks/useGame/buildGame";
import { UseGameManagerContext } from "./hooks/useGameManager";
import { buildGameManager } from "./hooks/useGameManager/buildGameManager";

function App() {
  const initGameProps = buildGame();
  const gameManager = buildGameManager(initGameProps);

  return (
    <UseGameManagerContext.Provider value={gameManager}>
      <div className="App">Hello, world!</div>
    </UseGameManagerContext.Provider>
  );
}

export default App;
