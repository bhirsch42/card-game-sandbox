import useGameManager from "./useGameManager";
import { GameProps } from "../lib/GameProps";
import { buildPlayerProps, PlayerProps } from "../lib/PlayerProps";
import { Action, GameReducer } from "../lib/GameManager";

type Game = GameProps & {
  init: () => void;
};

function useGame(): Game {
  const { state, dispatch } = useGameManager();

  function addPlayer(playerInput: Omit<PlayerProps, "id">): GameReducer {
    const player = buildPlayerProps(playerInput);

    return (gameProps: GameProps) => ({
      ...gameProps,
      players: [...gameProps.players, player],
    });
  }

  function initTurn(): GameReducer {
    return (gameProps: GameProps) => ({
      ...gameProps,
      turnId: gameProps.players[0].id,
    });
  }

  const initActions: Action[] = [
    { reducer: addPlayer({ name: "Alice" }), delay: 0 },
    { reducer: addPlayer({ name: "Bob" }), delay: 0 },
    { reducer: initTurn(), delay: 0 },
  ];

  return {
    ...state,

    init() {
      dispatch(initActions);
    },
  };
}

export default useGame;
