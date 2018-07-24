import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import M from "materialize-css";

class Signup extends Component {
  componentDidMount() {
    M.FormSelect.init(document.querySelectorAll("select"));
  }

  render() {
    return (
      <div className="container">
        <div className="input-field">
          <Field name="authMethod" component="select">
            <option value="google">Google</option>
            <option value="email">Email</option>
          </Field>
          <label>Authentication Method</label>
        </div>
        <button
          onClick={this.props.onCancel}
          className="yellow darken-3 white-text btn-flat"
        >
          Back
        </button>
        <a
          href={`/auth/${this.props.formValue.authMethod}`}
          className="teal btn-flat right white-text"
        >
          Submit
          <i className="material-icons right">done</i>
        </a>
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
