import React, { Component } from "react";
import { reduxForm, getFormSyncErrors, getFormAsyncErrors } from "redux-form";
import { connect } from "react-redux";

import M from "materialize-css";

import Username from "./Username";

import validate from "./validate";
import asyncValidate from "./asyncValidate";

class UsernameComponent extends Component {
  componentDidMount() {
    M.updateTextFields();
  }

  render() {
    const { handleSubmit, syncErrors, asyncErrors } = this.props;

    return (
      <Username
        handleSubmit={handleSubmit}
        fieldName="username"
        fieldLabel="Username"
        submitButtonText="Next"
        syncErrors={syncErrors.username}
        asyncErrors={asyncErrors}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    syncErrors: getFormSyncErrors("newUserForm")(state),
    asyncErrors: getFormAsyncErrors("newUserForm")(state)
  };
};

UsernameComponent = connect(mapStateToProps)(UsernameComponent);

export default reduxForm({
  validate,
  asyncValidate,
  asyncChangeFields: ["username"],
  form: "newUserForm",
  destroyOnUnmount: false
})(UsernameComponent);
