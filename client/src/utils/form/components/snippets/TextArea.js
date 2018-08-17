import React, { Component } from "react";

import M from "materialize-css";

import Error from "./Error";

export default class TextArea extends Component {
  componentDidMount() {
    M.updateTextFields();
  }

  render() {
    const {
      input,
      label,
      dataLength,
      meta: { touched, error }
    } = this.props;
    return (
      <div className="input-field col s12">
        <textarea
          {...input}
          id={label}
          className="materialize-textarea"
          data-length={dataLength}
        />
        <label htmlFor={label}>{label}</label>
        <Error touched={touched} error={error} />
      </div>
    );
  }
}
