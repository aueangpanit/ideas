import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class ProfilePicture extends Component {
  onSubmit() {
    console.log("hello");
  }

  render() {
    const { previousPage } = this.props;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col s6">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <button
                onClick={previousPage}
                className="grey darken-3 btn-flat left white-text waves-effect"
              >
                Back
              </button>
              <button
                type="submit"
                className="blue darken-3 btn-flat right white-text waves-effect"
              >
                Submit
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
