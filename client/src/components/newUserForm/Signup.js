import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import M from "materialize-css";

import { LOGIN_DROPDOWN } from "../../data/auth/loginDropdownOptions";

import SubmitButton from "../utils/form/SubmitButton";
import BackButton from "../utils/form/BackButton";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

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

  onSubmit() {
    const { authOptionValue } = this.props;
    if (authOptionValue === "google") {
      window.location.href = "/auth/google";
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="row">
                <div className="input-field col s6">
                  <Field name="authOption" component="select">
                    {this.renderOptions()}
                  </Field>
                  <label>Materialize Select</label>
                </div>
              </div>
              <div className="row">
                <SubmitButton />
                <BackButton link="/" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector("authOption");
  const authOptionValue = selector(state, "authOption");
  return {
    authOptionValue
  };
}

Signup = connect(mapStateToProps)(Signup);

export default reduxForm({
  form: "authOption",
  initialValues: {
    authOption: "google"
  }
})(Signup);
