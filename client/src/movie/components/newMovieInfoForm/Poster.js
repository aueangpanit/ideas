import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import validate from "./validate";
import utils from "../../../utils";

const { FileField } = utils.form.components;

class Poster extends Component {
  render() {
    return <div>Poster</div>;
  }
}

export default reduxForm({
  form: "newMovieInfoForm",
  validate
})(Poster);
