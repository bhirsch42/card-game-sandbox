import { LocationProps } from "./LocationProps";
import { PlayerId, PlayerProps } from "./PlayerProps";

export type GameId = number;

export type GameProps = {
  id: GameId;
  locations: LocationProps[];
  players: PlayerProps[];
  turnId: PlayerId | null;
};

let gameIdInc: GameId = 0;

export function buildGame(): GameProps {
  return {
    id: gameIdInc++,
    turnId: null,
    locations: [],
    players: [],
  };
}
