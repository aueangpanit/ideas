import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import utils from "../utils";
import genre from "../genre";

const authReducer = utils.auth.reducer;
const genreListReducer = genre.reducers;

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  genre: genreListReducer
});
