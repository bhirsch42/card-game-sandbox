import { splitAt } from "ramda";
import { GameProps } from "../useGame/buildGame";

export type Subscriber = (gameProps: GameProps) => void;

export type GameReducer = (gameProps: GameProps) => GameProps;

export type Action = {
  reducer: GameReducer;
  delay: number;
};

export type GameManager = {
  subscribe: (subscriber: Subscriber) => void;
  dispatch: (newActions: Action[]) => void;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function buildGameManager(gameProps: GameProps): GameManager {
  let subscribers: Subscriber[] = [];
  let state = gameProps;
  let actions: Action[] = [];
  let isProcessing = false;

  function updateSubscribers() {
    subscribers.forEach((subscriber) => subscriber(state));
  }

  async function processActions() {
    if (isProcessing) return;

    isProcessing = true;

    while (actions.length > 0) {
      const [[action], remainingActions] = splitAt(1, actions);
      state = action.reducer(state);
      updateSubscribers();
      actions = remainingActions;
      await wait(action.delay + 400);
    }

    isProcessing = false;
  }

  const dispatch = (newActions: Action[]) => {
    actions = [...actions, ...newActions];
    processActions();
  };

  const subscribe = (subscriber: Subscriber) => {
    subscribers = [...subscribers, subscriber];
  };

  const gameManager: GameManager = {
    dispatch,
    subscribe,
  };

  return gameManager;
}
