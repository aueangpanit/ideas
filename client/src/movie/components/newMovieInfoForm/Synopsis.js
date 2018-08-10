import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import M from "materialize-css";

import utils from "../../../utils";
import validate from "./validate";

const { TextArea, SubmitButton } = utils.form.components;

class Synopsis extends Component {
  componentDidMount() {
    M.CharacterCounter.init(document.getElementById("Synopsis"));
  }

  render() {
    const { handleSubmit, synopsisValue } = this.props;

    return (
      <div className="container">
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col s12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field
                  name="synopsis"
                  component={TextArea}
                  label="Synopsis"
                  dataLength="2000"
                />
              </div>
              <div className="row">
                <SubmitButton text={synopsisValue ? "Next" : "Skip"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("newMovieInfoForm");
  const synopsisValue = selector(state, "synopsis");

  return {
    synopsisValue
  };
};

Synopsis = connect(mapStateToProps)(Synopsis);

export default reduxForm({
  form: "newMovieInfoForm",
  validate
})(Synopsis);
