export type PlayerId = number;

export type PlayerProps = {
  id: PlayerId;
  name: string;
};

export type PlayerInput = Omit<PlayerProps, "id">;

let idInc = 0;

function makeId() {
  return idInc++;
}

export function buildPlayerProps(playerInput: PlayerInput): PlayerProps {
  return { id: makeId(), ...playerInput };
}
