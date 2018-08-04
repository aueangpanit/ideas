import React, { Component } from "react";
import { connect } from "react-redux";

import PleaseLogin from "../../pleaseLogin";

class Profile extends Component {
  render() {
    if (this.props.auth) {
      return <div>Profile</div>;
    }

    return <PleaseLogin />;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Profile);
