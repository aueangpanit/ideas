import { CHECK_MOVIE_AVAILABLE, NEW_MOVIE_SUBMIT } from "./actionTypes";

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
    case NEW_MOVIE_SUBMIT:
      return state;
    default:
      return state;
  }
};
