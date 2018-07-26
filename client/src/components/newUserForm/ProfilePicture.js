import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FileInput from '../utils/form/FileInput';

class ProfilePicture extends Component {
  onSubmit() {
    console.log('hello');
  }

  onChange() {}

  render() {
    const { previousPage, handleSubmit } = this.props;
    return (
      <div className="container" style={{ marginTop: '20px' }}>
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

function validate(values) {
  console.log(values);
  const errors = {};

  return errors;
}

export default reduxForm({
  validate,
  form: 'newUserForm',
  destroyOnUnmount: false
})(ProfilePicture);
