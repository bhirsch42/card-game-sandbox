import { CardProps } from "./CardProps";
import { PlayerId } from "./PlayerProps";

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
