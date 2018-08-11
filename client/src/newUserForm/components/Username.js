import React from "react";

import { Field } from "redux-form";

import utils from "../../utils";

const { TextField, SubmitButton } = utils.form.components;

export default ({
  handleSubmit,
  fieldName,
  fieldLabel,
  submitButtonText,
  syncErrors,
  asyncErrors
}) => {
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <Field
                name={fieldName}
                label={fieldLabel}
                component={TextField}
              />
            </div>
            <div className="row">
              <SubmitButton
                text={submitButtonText}
                error={syncErrors || asyncErrors}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
