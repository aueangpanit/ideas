import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FileInputExtraInfo from "../utils/form/FileInputExtraInfo";
import ErrorText from "../utils/form/ErrorText";
import * as actions from "../../actions";

const MAX_PROFILE_PICTURE_SIZE = 1024 * 1024;

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      file: null,
      submitted: false
    };
  }

  onSubmit() {
    const {
      formValues: { username },
      history
    } = this.props;
    const { file } = this.state;

    if (file) {
      if (
        file.type.substring(0, 5) === "image" &&
        file.size < MAX_PROFILE_PICTURE_SIZE
      ) {
        this.props.newUserFormSubmit({ username, file }, history);
        this.setState({ submitted: true });
      }
    } else {
      this.props.newUserFormSubmit({ username, file }, history);
      this.setState({ submitted: true });
    }
  }

  onChange(files) {
    this.setState({ file: files[0] });
  }

  extraInfo() {
    const { file } = this.state;
    if (file) {
      if (file.type.substring(0, 5) !== "image") {
        return (
          <ErrorText
            text="Not an image type file.
          Please choose an image type file."
          />
        );
      }

      if (file.size >= MAX_PROFILE_PICTURE_SIZE) {
        return (
          <ErrorText
            text="Image too large. Please
          use an image that's smaller than 1 Mb."
          />
        );
      }
    }
  }

  submitButtonClass() {
    const { file, submitted } = this.state;
    const className = "darken-3 btn-flat right white-text waves-effect";
    if (submitted) {
      return `disabled blue ${className}`;
    }

    if (file) {
      if (
        file.type.substring(0, 5) === "image" &&
        file.size < MAX_PROFILE_PICTURE_SIZE
      ) {
        return `blue ${className}`;
      }
      return `grey ${className}`;
    }
    return `blue ${className}`;
  }

  submitButtonText() {
    const { file, submitted } = this.state;
    if (submitted) {
      return "Submiting";
    }

    if (file) {
      return "Submit";
    }

    return "Skip";
  }

  render() {
    const { previousPage, handleSubmit } = this.props;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit(this.onSubmit)}>
            <FileInputExtraInfo
              onChange={this.onChange}
              loading={false}
              extraInfo={this.extraInfo()}
            />
            <div className="row">
              <button
                onClick={previousPage}
                className="grey darken-3 btn-flat left white-text waves-effect"
              >
                Back
              </button>
              <button type="submit" className={this.submitButtonClass()}>
                {this.submitButtonText()}
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {
    formValues: state.form.newUserForm.values
  };
}

ProfilePicture = connect(
  mapStateToProps,
  actions
)(withRouter(ProfilePicture));

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(ProfilePicture);
