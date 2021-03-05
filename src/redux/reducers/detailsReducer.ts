interface Action {
  type: string;
  payload: {
    details: Details;
    screenShots: Screenshot[];
  };
}

export interface Details {
  id: number;
  name: string;
  description_raw: string;
  rating: number;
  background_image: string;
  platforms: { platform: { id: number; name: string } }[];
}

export interface Screenshot {
  id: number;
  image: string;
}

export class GameDetailsState {
  details: Details | undefined;
  screenShots: Screenshot[] | undefined;
  constructor() {
    this.details = undefined;
    this.screenShots = undefined;
  }
}

export const detailsReducer = (state = new GameDetailsState(), { type, payload }: Action): GameDetailsState => {
  switch (type) {
    case "FETCH_DETAILS":
      return { ...state, details: payload.details, screenShots: payload.screenShots };
    default:
      return state;
  }
};
