import { LocationProps, LocationTypes } from "../useLocation/buildLocation";
import { PlayerId, PlayerProps } from "./buildPlayer";
import useGame from "../useGame";

type Player = PlayerProps & {
  locations: LocationProps[];
  deck: LocationProps | null;
  hand: LocationProps | null;
};

function usePlayer(playerId: PlayerId): Player {
  const state = useGame();

  const player = state.players.find(({ id }) => id === playerId);

  const locations = state.locations.filter(
    ({ ownerId }) => ownerId === playerId
  );

  const deck =
    locations.find((location) => location.type === LocationTypes.DECK) || null;

  const hand =
    locations.find((location) => location.type === LocationTypes.HAND) || null;

  if (!player) throw new Error(`No player with id ${playerId}`);

  return {
    ...player,
    locations,
    deck,
    hand,
  };
}

export default usePlayer;
