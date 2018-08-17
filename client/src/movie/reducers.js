import { CHECK_MOVIE_AVAILABLE, FETCH_MOVIE } from "./actionTypes";

export default (
  state = {
    newMovieForm: {
      available: true
    }
  },
  action
) => {
  switch (action.type) {
    case CHECK_MOVIE_AVAILABLE:
      return {
        newMovieForm: action.payload
      };
    case FETCH_MOVIE:
      return { currentMovie: action.payload.movie };
    default:
      return state;
  }
};
