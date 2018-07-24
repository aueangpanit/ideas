import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Username from "./Username";

class NewUserForm extends Component {
  renderContent() {
    return <Username />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "newUserForm"
})(NewUserForm);
