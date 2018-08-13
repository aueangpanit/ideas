import React from "react";
import { Field } from "redux-form";

import SubmitButton from "./snippets/SubmitButton";
import { LinkAsBackButton } from "./snippets/BackButton";

export default ({
  onSubmit,
  fieldName,
  fieldLabel,
  fieldOptions,
  backButtonLink
}) => {
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <Field name={fieldName} component="select">
                  {fieldOptions}
                </Field>
                <label>{fieldLabel}</label>
              </div>
            </div>
            <div className="row">
              <SubmitButton />
              <LinkAsBackButton link={backButtonLink} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
