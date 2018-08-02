import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import validate from "./validate";
import { checkUsername } from "../actions";
import utils from "../../utils";
const { TextField, SubmitButton } = utils.form.components;

class Username extends Component {
  constructor(props) {
    super(props);

    this.onChange = _.debounce(this.onChange.bind(this), 400);
  }

  onChange() {
    const { checkUsername, usernameValue } = this.props;

    checkUsername(usernameValue);
  }

  render() {
    const { handleSubmit, available } = this.props;

    console.log(available);

    return (
      <div className="container">
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field
                  name="username"
                  component={TextField}
                  id="new-user-form-username-field"
                  onChange={this.onChange}
                />
              </div>
              <div className="row">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("newUserForm");
  const usernameValue = selector(state, "username");

  return {
    usernameValue,
    available: state.newUserForm.usernameAvailable
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ checkUsername }, dispatch);
};

Username = connect(
  mapStateToProps,
  mapDispatchToProps
)(Username);

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(Username);
