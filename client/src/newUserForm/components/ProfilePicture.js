import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import M from "materialize-css";

import validate from "./validate";
import { newUserFormSubmit } from "../actions";

import utils from "../../utils";

const { PictureForm } = utils.form.components;

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      profilePictureValue: null,
      profilePictureError: "",
      imagePreviewUrl: `${
        window.location.origin
      }/img/blank-profile-picture.png`,
      submitting: false
    };
  }

  componentDidMount() {
    M.Materialbox.init(document.querySelectorAll(".materialboxed"), {});
  }

  validate(file) {
    if (file) {
      if (file.type.substring(0, 5) !== "image") {
        this.setState({
          profilePictureError:
            "This is not an image file. Please pick an image file."
        });
      } else if (file.size > 1024 * 1024) {
        this.setState({
          profilePictureError:
            "This file is too large. Please use a picture thats less than 1 Mb."
        });
      } else {
        this.setState({ profilePictureError: null });
      }
    } else {
      this.setState({ profilePictureError: null });
    }
  }

  onChange(files) {
    const fr = new FileReader();
    const file = files[0];

    this.setState({
      profilePictureValue: file
    });

    if (file) {
      if (file.type.substring(0, 5) === "image" && file.size < 1024 * 1024)
        fr.onloadend = () => {
          this.setState({
            imagePreviewUrl: fr.result
          });
        };
      fr.readAsDataURL(file);
    } else {
      this.setState({
        imagePreviewUrl: `${
          window.location.origin
        }/img/blank-profile-picture.png`
      });
    }
    this.validate(file);
  }

  onSubmit() {
    const { newUserFormSubmit, usernameValue, history } = this.props;
    const { profilePictureValue, profilePictureError } = this.state;

    if (!profilePictureError) {
      const values = {
        username: usernameValue,
        file: profilePictureValue
      };

      newUserFormSubmit(values, history);
    }

    this.setState({ submitting: true });
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    const {
      profilePictureValue,
      profilePictureError,
      imagePreviewUrl,
      submitting
    } = this.state;

    const img = {
      id: "profile-picture-box",
      alt: "Profile",
      src: imagePreviewUrl
    };

    return (
      <PictureForm
        onSubmit={handleSubmit(this.onSubmit)}
        img={img}
        fileField={{
          placeholderText: "Upload Profile Picture",
          onChange: this.onChange
        }}
        backButton={{ onClick: previousPage }}
        submitButton={{
          submitting,
          text: profilePictureValue ? "Submit" : "Skip"
        }}
        error={profilePictureError}
      />
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("newUserForm");
  const usernameValue = selector(state, "username");

  return {
    usernameValue
  };
};

ProfilePicture = connect(
  mapStateToProps,
  { newUserFormSubmit }
)(withRouter(ProfilePicture));

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(ProfilePicture);
