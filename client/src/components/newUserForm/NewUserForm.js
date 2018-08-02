import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "redux";

class NewUserForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserForm;
