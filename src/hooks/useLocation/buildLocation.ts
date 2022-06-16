import { CardProps } from "../useCard/buildCard";
import { PlayerId } from "../usePlayer/buildPlayer";

export enum LocationTypes {
  DECK = "deck",
  HAND = "hand",
}

export type LocationId = number;

export type LocationProps = {
  id: LocationId;
  cards: CardProps[];
  ownerId: PlayerId;
  type: LocationTypes;
};
