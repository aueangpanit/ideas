import React, { Component } from "react";

import M from "materialize-css";

import Loading from "./Loading";
import Error from "./Error";

export default class TextField extends Component {
  componentDidMount() {
    M.updateTextFields();
  }

  render() {
    const {
      input,
      label,
      meta: { asyncValidating, touched, error }
    } = this.props;

    return (
      <React.Fragment>
        <div className="input-field col s6">
          <input {...input} type="text" />
          <label>{label}</label>
          <Error touched={touched} error={error} />
        </div>
        <div className="col s6" style={{ paddingTop: "20px" }}>
          {asyncValidating ? <Loading /> : ""}
        </div>
      </React.Fragment>
    );
  }
}
