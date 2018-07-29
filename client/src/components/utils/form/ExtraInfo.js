import React, { Component } from "react";

import Loading from "./Loading";

class ExtraInfo extends Component {
  renderInfo() {
    const { loading, error, extraInfo } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return "";
    }

    return extraInfo;
  }

  render() {
    return (
      <div className="col s6" style={{ marginTop: "26px" }}>
        {this.renderInfo()}
      </div>
    );
  }
}

export default ExtraInfo;
