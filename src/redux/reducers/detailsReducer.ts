interface Action {
  type: string;
  payload: {
    details: {};
    screenShots: [];
  };
}

const initialState = {
  details: {},
  screenShots: [],
};

export const detailsReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "FETCH_DETAILS":
      return { ...state, details: payload.details, screenShots: payload.screenShots };
    default:
      return state;
  }
};
