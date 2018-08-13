import React, { Component } from "react";
import { reduxForm, getFormSyncErrors, getFormAsyncErrors } from "redux-form";
import { connect } from "react-redux";

import M from "materialize-css";

import utils from "../../utils";

import validate from "./validate";
import asyncValidate from "./asyncValidate";

const { TextFormNoBackButton } = utils.form.components;

class Username extends Component {
  componentDidMount() {
    M.updateTextFields();
  }

  render() {
    const { handleSubmit, syncErrors, asyncErrors } = this.props;

    return (
      <TextFormNoBackButton
        onSubmit={handleSubmit}
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

Username = connect(mapStateToProps)(Username);

export default reduxForm({
  validate,
  asyncValidate,
  asyncChangeFields: ["username"],
  form: "newUserForm",
  destroyOnUnmount: false
})(Username);
