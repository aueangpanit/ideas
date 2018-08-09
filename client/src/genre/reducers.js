import { FETCH_GENRES } from "./actionTypes";

export default (state = { genres: [] }, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        genres: [...state.genres, ...action.payload.genres],
        last_id: action.payload.last_id
      };
    default:
      return state;
  }
};
