import React from "react";
import { buildGame } from "../useGame/buildGame";
import { buildGameManager, GameManager } from "./buildGameManager";

const DEFAULT_GAME_MANAGER = buildGameManager(buildGame());

export const UseGameManagerContext =
  React.createContext<GameManager>(DEFAULT_GAME_MANAGER);

function useGameManager() {
  return React.useContext(UseGameManagerContext);
}

export default useGameManager;
