import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TextFieldExtraInfo from "../utils/form/TextFieldExtraInfo";
import * as actions from "../../actions";

class Username extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.debouncedOnChange = _.debounce(this.onChange, 400);
  }

  onChange() {
    if (this.props.formValues) {
      this.props.checkUsername(this.props.formValues.username);
    } else {
      this.props.checkUsername(null);
    }
  }

  onSubmit({ username }) {
    if (username && this.props.usernameCheck.available) {
      this.props.updateUsername(username, this.props.history);
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <form
            className="col s12"
            onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              onChange={() => {
                this.props.checkUsernameLoading();
                this.debouncedOnChange();
              }}
              name="username"
              component={TextFieldExtraInfo}
              label="Username"
              classSize="s6"
              loading={
                this.props.usernameCheck
                  ? this.props.usernameCheck.loading
                  : false
              }
              extraInfo={
                this.props.usernameCheck ? (
                  this.props.usernameCheck.available ? (
                    <div>
                      <i className="material-icons left">done</i>Available
                    </div>
                  ) : (
                    <div className="red-text">
                      <i className="material-icons left">error</i>Already taken.
                      Please choose a different username.
                    </div>
                  )
                ) : (
                  ""
                )
              }
            />

            <div className="row">
              <Link
                to="/profile"
                className="grey darken-3 white-text btn-flat waves-effect"
              >
                Cancel
              </Link>
              <button
                onClick={this.props.handleClick}
                type="submit"
                className="grey darken-3 btn-flat right white-text waves-effect"
              >
                Submit
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
        </div>
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
    formValues: state.form.newUserForm.values,
    usernameCheck: state.profile
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
