import React, { Component } from "react";
import {
  reduxForm,
  Field,
  getFormSyncErrors,
  getFormAsyncErrors
} from "redux-form";
import { connect } from "react-redux";

import validate from "./validate";
import asyncValidate from "./asyncValidate";
import utils from "../../utils";
const { TextField, SubmitButton } = utils.form.components;

class Username extends Component {
  render() {
    const { handleSubmit, syncErrors, asyncErrors } = this.props;

    return (
      <div className="container">
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field
                  name="username"
                  label="Username"
                  component={TextField}
                  id="new-user-form-username-field"
                />
              </div>
              <div className="row">
                <SubmitButton
                  text="Next"
                  error={syncErrors.username || asyncErrors}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    syncErrors: getFormSyncErrors("newUserForm")(state),
    asyncErrors: getFormAsyncErrors("newUserForm")(state)
  };
};

Username = connect(mapStateToProps)(Username);

export default reduxForm({
  validate,
  asyncValidate,
  asyncChangeFields: ["username"],
  form: "newUserForm",
  destroyOnUnmount: false
})(Username);
