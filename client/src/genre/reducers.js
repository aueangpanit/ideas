import { FETCH_GENRES } from "./actionTypes";

export default (state = { genres: [], reachedEnd: false }, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      if (action.payload.genres.length) {
        return {
          genres: [...state.genres, ...action.payload.genres],
          last_id: action.payload.last_id,
          reachedEnd: false
        };
      }
      return {
        genres: state.genres,
        last_id: state.last_id,
        reachedEnd: true
      };
    default:
      return state;
  }
};
