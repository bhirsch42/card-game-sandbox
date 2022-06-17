import React from "react";
import useGameManager from "../useGameManager";
import { Action } from "../useGameManager/buildGameManager";
import * as actions from "../../actions";
import { buildGame, GameProps } from "./buildGame";

const DEFAULT_GAME_PROPS = buildGame();

export const UseGameContext =
  React.createContext<GameProps>(DEFAULT_GAME_PROPS);

export function useGameContext() {
  return React.useContext(UseGameContext);
}

type Game = GameProps & {
  init: () => void;
};

function useGame(): Game {
  const { dispatch } = useGameManager();
  const gameContext = useGameContext();

  const initActions: Action[] = [
    { reducer: actions.game.addPlayer({ name: "Alice" }), delay: 0 },
    { reducer: actions.game.addPlayer({ name: "Bob" }), delay: 0 },
    { reducer: actions.game.initTurn(), delay: 0 },
  ];

  return {
    init() {
      console.log("init game");
      dispatch(initActions);
    },
    ...gameContext,
  };
}

export default useGame;
