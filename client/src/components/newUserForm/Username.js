import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TextField from "../utils/form/TextField";
import * as actions from "../../actions";

class Username extends Component {
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.props.handleSubmit(() =>
            this.props.updateUsername(this.props.formValues, this.props.history)
          )}
        >
          <Field
            type="text"
            label="Username"
            name="username"
            component={TextField}
          />
          <Link to="/profile" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Please enter a username.";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    formValues: state.form.newUserForm.values
  };
}

Username = connect(
  mapStateToProps,
  actions
)(withRouter(Username));

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(Username);
