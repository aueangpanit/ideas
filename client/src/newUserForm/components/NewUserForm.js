import React, { Component } from "react";
import { connect } from "react-redux";

import Username from "./UsernameContainer";
import ProfilePicture from "./ProfilePicture";
import PleaseLogin from "../../pleaseLogin";

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
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  previousPage() {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  render() {
    const { auth } = this.props;
    const { page } = this.state;

    if (auth) {
      return (
        <div>
          {page === 1 && <Username onSubmit={this.nextPage} />}
          {page === 2 && <ProfilePicture previousPage={this.previousPage} />}
        </div>
      );
    }

    return <PleaseLogin />;
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    auth
  };
};

export default connect(mapStateToProps)(NewUserForm);
