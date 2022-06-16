import { GameReducer } from "../../hooks/useGameManager/buildGameManager";
import {
  buildPlayerProps,
  PlayerProps,
} from "../../hooks/usePlayer/buildPlayer";

export function addPlayer(playerInput: Omit<PlayerProps, "id">): GameReducer {
  const player = buildPlayerProps(playerInput);

  return (gameProps: GameProps) => ({
    ...gameProps,
    players: [...gameProps.players, player],
  });
}
