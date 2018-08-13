import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  reduxForm,
  formValueSelector,
  getFormSyncErrors,
  getFormAsyncErrors
} from "redux-form";

import M from "materialize-css";

import { genreFormSubmit } from "../actions";
import validate from "./validate";
import asyncValidate from "./asyncValidate";

import PleaseLogin from "../../pleaseLogin";
import utils from "../../utils";

const { TextForm } = utils.form.components;

class newGenreForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      submitting: false
    };
  }

  componentDidMount() {
    M.updateTextFields();
  }

  onSubmit() {
    const { genreFormSubmit, genreValue, history } = this.props;

    this.setState({ submitting: true });

    genreFormSubmit(genreValue, history);
  }

  render() {
    const { auth, handleSubmit, syncErrors, asyncErrors } = this.props;

    const { submitting } = this.state;

    if (auth) {
      return (
        <TextForm
          onSubmit={handleSubmit(this.onSubmit)}
          fieldName="genre"
          fieldLabel="Genre"
          backButtonLink="/profile"
          submitting={submitting}
          syncErrors={syncErrors.genre}
          asyncErrors={asyncErrors}
        />
      );
    }

    return <PleaseLogin />;
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  const selector = formValueSelector("newGenreForm");
  const genreValue = selector(state, "genre");

  return {
    auth,
    genreValue,
    syncErrors: getFormSyncErrors("newGenreForm")(state),
    asyncErrors: getFormAsyncErrors("newGenreForm")(state)
  };
};

newGenreForm = connect(
  mapStateToProps,
  { genreFormSubmit }
)(withRouter(newGenreForm));

export default reduxForm({
  validate,
  asyncValidate,
  asyncChangeFields: ["genre"],
  form: "newGenreForm"
})(newGenreForm);
