import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import M from "materialize-css";

import { genreFormSubmit } from "../actions";

import PleaseLogin from "../../pleaseLogin";
import utils from "../../utils";

const { TextField, LinkAsBackButton, SubmitButton } = utils.form.components;

class GenreForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    M.updateTextFields();
  }

  onSubmit() {
    const { genreFormSubmit, genreValue, history } = this.props;

    genreFormSubmit(genreValue, history);
  }

  render() {
    const { auth, handleSubmit } = this.props;

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
                  <SubmitButton />
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

const validate = values => {
  const error = {};

  if (!values.genre) {
    error.genre = "Please enter a genre.";
  }

  return error;
};

const mapStateToProps = state => {
  const { auth } = state;

  const selector = formValueSelector("genreForm");
  const genreValue = selector(state, "genre");

  return {
    auth,
    genreValue
  };
};

GenreForm = connect(
  mapStateToProps,
  { genreFormSubmit }
)(withRouter(GenreForm));

export default reduxForm({
  validate,
  form: "genreForm"
})(GenreForm);
