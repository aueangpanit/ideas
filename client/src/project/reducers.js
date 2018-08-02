import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import utils from "../utils";
import newUserForm from "../newUserForm";

const authReducer = utils.auth.reducer;
const newUserFormReducer = newUserForm.reducer;

export default combineReducers({
  auth: authReducer,
  newUserForm: newUserFormReducer,
  form: reduxForm
});
