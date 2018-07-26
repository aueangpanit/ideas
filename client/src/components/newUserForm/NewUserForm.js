import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import PleaseLogin from "../PleaseLogin";
import Username from "./Username";
import ProfilePicture from "./ProfilePicture";

class NewUserForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  renderContent() {
    const { page } = this.state;

    switch (page) {
      case 1:
        return <Username nextPage={this.nextPage} />;
      case 2:
        return <ProfilePicture previousPage={this.previousPage} />;
      default:
        return <Username nextPage={this.nextPage} />;
    }
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
