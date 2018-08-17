import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import M from "materialize-css";

import utils from "../../../utils";
import validate from "./validate";

const { TextAreaForm } = utils.form.components;

class Synopsis extends Component {
  componentDidMount() {
    M.CharacterCounter.init(document.getElementById("Synopsis"));
  }

  render() {
    const { handleSubmit, synopsisValue } = this.props;

    return (
      <TextAreaForm
        onSubmit={handleSubmit}
        fieldName="synopsis"
        fieldLabel="Synopsis"
        dataLength={"2000"}
        submitButtonText={synopsisValue ? "Next" : "Skip"}
      />
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("newMovieInfoForm");
  const synopsisValue = selector(state, "synopsis");

  return {
    synopsisValue
  };
};

Synopsis = connect(mapStateToProps)(Synopsis);

export default reduxForm({
  validate,
  form: "newMovieInfoForm",
  destroyOnUnmount: false
})(Synopsis);
