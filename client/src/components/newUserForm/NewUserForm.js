import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import PleaseLogin from "../PleaseLogin";
import Username from "./Username";

class NewUserForm extends Component {
  renderContent() {
    return <Username />;
  }

  render() {
    if (this.props.auth) {
      return <div>{this.renderContent()}</div>;
    }
    return <PleaseLogin />;
  }
}

function mapStateToProp({ auth }) {
  return {
    auth
  };
}

NewUserForm = connect(mapStateToProp)(NewUserForm);

export default reduxForm({
  form: "newUserForm"
})(NewUserForm);
