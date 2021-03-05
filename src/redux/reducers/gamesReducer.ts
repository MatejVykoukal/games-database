import { GameModel } from "../../interfaces/GameModel";

interface Action {
  type: string;
  payload: {
    popular: GameModel[];
    new: GameModel[];
    upcoming: GameModel[];
  };
}

export class State {
  newGames: GameModel[] | null;
  upcomingGames: GameModel[] | null;
  popularGames: GameModel[] | null;
  constructor() {
    this.newGames = null;
    this.upcomingGames = null;
    this.popularGames = null;
  }
}

export const gamesReducer = (state = new State(), { type, payload }: Action): State => {
  switch (type) {
    case "FETCH_GAMES":
      return {
        ...state,
        newGames: payload.new,
        popularGames: payload.popular,
        upcomingGames: payload.upcoming,
      };

    default: {
      return state;
    }
  }
};
