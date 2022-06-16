import { GameProps } from "../../hooks/useGame/buildGame";
import { GameReducer } from "../../hooks/useGameManager/buildGameManager";

export function initTurn(): GameReducer {
  return (gameProps: GameProps) => ({
    ...gameProps,
    turnId: gameProps.players[0].id,
  });
}
