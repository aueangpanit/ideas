import React from "react";
import { Field } from "redux-form";

import TextField from "./snippets/TextField";
import SubmitButton from "./snippets/SubmitButton";
import { LinkAsBackButton } from "./snippets/BackButton";

export const TextForm = ({
  onSubmit,
  fieldName,
  fieldLabel,
  backButtonLink,
  submitButtonText,
  submitting,
  syncErrors,
  asyncErrors
}) => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row">
              <Field
                name={fieldName}
                component={TextField}
                label={fieldLabel}
              />
            </div>
            <div className="row">
              <LinkAsBackButton link={backButtonLink} />
              <SubmitButton
                id="submit-button"
                submitting={submitting}
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

export const TextFormNoBackButton = ({
  onSubmit,
  fieldName,
  fieldLabel,
  submitButtonText,
  submitting,
  syncErrors,
  asyncErrors
}) => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row">
              <Field
                name={fieldName}
                component={TextField}
                label={fieldLabel}
              />
            </div>
            <div className="row">
              <SubmitButton
                id="submit-button"
                submitting={submitting}
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
