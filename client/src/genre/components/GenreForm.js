import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  reduxForm,
  Field,
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

const { TextField, LinkAsBackButton, SubmitButton } = utils.form.components;

class GenreForm extends Component {
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
        <div className="container">
          <div className="row">
            <div className="col s12">
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="row">
                  <Field name="genre" label="Genre" component={TextField} />
                </div>
                <div className="row">
                  <LinkAsBackButton link="profile" />
                  <SubmitButton
                    error={syncErrors.genre || asyncErrors}
                    submitting={submitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
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

GenreForm = connect(
  mapStateToProps,
  { genreFormSubmit }
)(withRouter(GenreForm));

export default reduxForm({
  validate,
  asyncValidate,
  asyncChangeFields: ["genre"],
  form: "newGenreForm"
})(GenreForm);
