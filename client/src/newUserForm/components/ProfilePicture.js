import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import validate from "./validate";
import utils from "../../utils";

const { FileField, BackButton_Button, SubmitButton } = utils.form.components;

class ProfilePicture extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;

    return (
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <FileField placeholderText="Upload Profile Picture" />
              </div>
              <div className="row">
                <BackButton_Button onClick={previousPage} />
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(ProfilePicture);
