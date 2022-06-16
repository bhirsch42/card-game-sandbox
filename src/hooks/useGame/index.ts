import useGameManager from "../useGameManager";
import { GameProps } from "./buildGame";
import { Action } from "../useGameManager/buildGameManager";
import * as actions from "../../actions";

type Game = GameProps & {
  init: () => void;
};

function useGame(): Game {
  const { state, dispatch } = useGameManager();

  const initActions: Action[] = [
    { reducer: actions.game.addPlayer({ name: "Alice" }), delay: 0 },
    { reducer: actions.game.addPlayer({ name: "Bob" }), delay: 0 },
    { reducer: actions.game.initTurn(), delay: 0 },
  ];

  return {
    ...state,

    init() {
      dispatch(initActions);
    },
  };
}

export default useGame;
