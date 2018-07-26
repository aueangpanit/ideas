import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TextFieldExtraInfo from '../utils/form/TextFieldExtraInfo';
import * as actions from '../../actions';

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

  onSubmit() {
    const {
      formValues: { username },
      usernameCheck: { available }
    } = this.props;
    if (username && available) {
      //this.props.updateUsername(username, this.props.history);
      this.props.nextPage();
    }
  }

  extraInfo() {
    const { usernameCheck } = this.props;
    if (usernameCheck) {
      if (usernameCheck.available) {
        return (
          <div>
            <i className="material-icons left">done</i>Available
          </div>
        );
      }
      return (
        <div className="red-text">
          <i className="material-icons left">error</i>Already taken. Please
          choose a different username.
        </div>
      );
    }

    return '';
  }

  submitButtonClassName() {
    const { usernameCheck, error } = this.props;
    const className = 'darken-3 btn-flat right white-text waves-effect';
    if (usernameCheck) {
      if (usernameCheck.available && !error) {
        return `blue ${className}`;
      }
      return `grey ${className}`;
    }
    return `grey ${className}`;
  }

  render() {
    const {
      handleClick,
      handleSubmit,
      checkUsernameLoading,
      usernameCheck
    } = this.props;

    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <form
            className="col s12"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              onChange={() => {
                checkUsernameLoading();
                this.debouncedOnChange();
              }}
              name="username"
              component={TextFieldExtraInfo}
              label="Username"
              classSize="s6"
              loading={usernameCheck ? usernameCheck.loading : false}
              extraInfo={this.extraInfo()}
            />

            <div className="row">
              <Link
                to="/profile"
                className="grey darken-3 white-text btn-flat waves-effect"
              >
                Cancel
              </Link>
              <button
                onClick={handleClick}
                type="submit"
                className={this.submitButtonClassName()}
              >
                Next
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
    errors.username = 'Please enter a username.';
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
  form: 'newUserForm',
  destroyOnUnmount: false
})(Username);
