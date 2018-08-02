import React, { Component } from "react";

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
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  previousPage() {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <Username onSubmit={this.nextPage} />}
        {page === 2 && <ProfilePicture previousPage={this.previousPage} />}
      </div>
    );
  }
}

export default NewUserForm;
