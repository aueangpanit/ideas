import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import utils from "../utils";

const authReducer = utils.auth.reducer;

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
