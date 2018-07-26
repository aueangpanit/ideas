import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import FileInput from "../utils/form/FileInput";
import * as actions from "../../actions";

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      file: null
    };
  }

  onSubmit() {
    const {
      formValues: { username },
      history
    } = this.props;
    const { file } = this.state;

    this.props.newUserFormSubmit({ username, file }, history);
  }

  onChange(files) {
    this.setState({ file: files[0] });
  }

  render() {
    const { previousPage, handleSubmit } = this.props;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit(this.onSubmit)}>
            <FileInput onChange={this.onChange} />
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
                {this.state.file ? "Submit" : "Skip"}
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
  console.log(values);
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
)(ProfilePicture);

export default reduxForm({
  validate,
  form: "newUserForm",
  destroyOnUnmount: false
})(ProfilePicture);
