import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import validate from "./validate";
import utils from "../../utils";

import { newUserFormSubmit } from "../actions";

const { FileField, ButtonAsBackButton, SubmitButton } = utils.form.components;

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      profilePictureValue: null,
      profilePictureError: ""
    };
  }

  validate(file) {
    if (file) {
      if (file.type.substring(0, 5) !== "image") {
        this.setState({
          profilePictureError:
            "This is not an image file. Please pick an image file."
        });
      } else if (file.size > 1000000) {
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
    this.setState({ profilePictureValue: files[0] });
    this.validate(files[0]);
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
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    const { profilePictureValue, profilePictureError } = this.state;

    return (
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="row">
                <FileField
                  placeholderText="Upload Profile Picture"
                  onChange={this.onChange}
                  error={profilePictureError}
                />
              </div>
              <div className="row">
                <ButtonAsBackButton onClick={previousPage} />
                <SubmitButton
                  text={profilePictureValue ? "Submit" : "Skip"}
                  error={profilePictureError}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
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
