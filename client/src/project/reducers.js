import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import utils from "../utils";
import genre from "../genre";
import movie from "../movie";

const authReducers = utils.auth.reducers;
const genreReducers = genre.reducers;
const movieReducers = movie.reducers;

export default combineReducers({
  form: reduxForm,
  auth: authReducers,
  genre: genreReducers,
  movie: movieReducers
});
