import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import M from "materialize-css";

import { LOGIN_DROPDOWN } from "../header/dropdownContents";

class Signup extends Component {
  componentDidMount() {
    M.FormSelect.init(document.querySelectorAll("select"));
  }
  renderOptions() {
    return _.map(LOGIN_DROPDOWN.contents, option => {
      return (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s6">
                <div className="input-field">
                  <Field name="authMethod" component="select">
                    {this.renderOptions()}
                  </Field>
                  <label>Authentication Method</label>
                </div>
              </div>
            </div>
            <div className="row">
              <button
                onClick={this.props.onCancel}
                className="grey darken-3 white-text btn-flat wave-effect"
              >
                Back
              </button>
              <a
                href={`/auth/${this.props.formValue.authMethod}`}
                className="blue darken-3 btn-flat right white-text wave-effect"
              >
                Next
                <i className="material-icons right">done</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { formValue: state.form.signupAuthMethod.values };
}

Signup = connect(mapStateToProps)(Signup);

export default reduxForm({
  form: "signupAuthMethod",
  initialValues: {
    authMethod: "google"
  }
})(Signup);
