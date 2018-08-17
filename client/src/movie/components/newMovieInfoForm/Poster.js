import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import validate from "./validate";
import { submitNewMovieInfo } from "../../actions";
import utils from "../../../utils";

const { PictureForm } = utils.form.components;

class Poster extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      posterValue: null,
      posterError: "",
      imagePreviewUrl: `${window.location.origin}/img/blank-image.jpg`,
      submitting: false
    };
  }

  onSubmit() {
    const {
      submitNewMovieInfo,
      currentMovie,
      synopsisValue,
      history
    } = this.props;
    const { posterError, posterValue } = this.state;

    if (!posterError) {
      const values = {
        synopsis: synopsisValue,
        poster: posterValue
      };

      submitNewMovieInfo(currentMovie, values, history);
    }

    this.setState({ submitting: true });
  }

  onChange(files) {
    const fr = new FileReader();
    const file = files[0];

    this.setState({
      posterValue: file
    });

    if (file) {
      const error = this.validate(file);

      if (!error) {
        fr.onloadend = () => {
          this.setState({
            imagePreviewUrl: fr.result
          });
        };
        fr.readAsDataURL(file);
      } else {
        this.setState({
          imagePreviewUrl: `${window.location.origin}/img/blank-image.jpg`
        });
      }
    }
  }

  validate(file) {
    var posterError = "";

    if (file) {
      if (file.type.substring(0, 5) !== "image") {
        posterError = "This is not an image file. Please pick an image file.";
      } else if (file.size > 1024 * 1024) {
        posterError =
          "This file is too large. Please use a picture thats less than 1 Mb.";
      }
    }

    this.setState({ posterError });

    return posterError;
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    const {
      posterValue,
      posterError,
      imagePreviewUrl,
      submitting
    } = this.state;

    return (
      <PictureForm
        onSubmit={handleSubmit(this.onSubmit)}
        img={{
          id: "poster",
          alt: "Poster",
          src: imagePreviewUrl,
          width: "100",
          height: "144"
        }}
        fileField={{
          placeholderText: "Upload Poster",
          onChange: this.onChange
        }}
        backButton={{
          onClick: previousPage
        }}
        submitButton={{
          submitting,
          text: posterValue ? "Submit" : "Skip"
        }}
        error={posterError}
      />
    );
  }
}

const mapStateToProps = state => {
  const { currentMovie } = state.movie;

  const selector = formValueSelector("newMovieInfoForm");
  const synopsisValue = selector(state, "synopsis");

  return {
    synopsisValue,
    currentMovie
  };
};

Poster = connect(
  mapStateToProps,
  { submitNewMovieInfo }
)(withRouter(Poster));

export default reduxForm({
  validate,
  form: "newMovieInfoForm",
  destroyOnUnmount: false
})(Poster);
