import React from "react";
import "./App.css";
import { buildGame } from "./lib/GameProps";
import { UseGameManagerContext } from "./hooks/useGameManager";
import { buildGameManager } from "./lib/GameManager";

const Game: React.FC = () => {};

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
