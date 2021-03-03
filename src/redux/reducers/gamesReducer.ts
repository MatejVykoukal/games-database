import { Game } from "../../interfaces/GameModel";
interface Action {
  type: string;
  payload: {
    popular: Game[];
    new: Game[];
    upcoming: Game[];
  };
}

class State {
  newGames: Game[] | [];
  upcomingGames: Game[] | [];
  popularGames: Game[] | [];
  constructor() {
    this.newGames = [];
    this.upcomingGames = [];
    this.popularGames = [];
  }
}

const gamesReducer = (state = new State(), { type, payload }: Action) => {
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

export default gamesReducer;
