import React from "react";
import { buildGame } from "../useGame/buildGame";
import { buildGameManager, GameManager } from "./buildGameManager";

const DEFAULT_GAME_PROPS = buildGame();
const DEFAULT_GAME_MANAGER = buildGameManager(DEFAULT_GAME_PROPS);

export const UseGameManagerContext =
  React.createContext<GameManager>(DEFAULT_GAME_MANAGER);

function useGameManager() {
  return React.useContext(UseGameManagerContext);
}

export default useGameManager;
