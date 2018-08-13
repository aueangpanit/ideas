import React from "react";
import { Field } from "redux-form";

import DatePicker from "./snippets/DatePicker";
import TextField from "./snippets/TextField";
import SubmitButton from "./snippets/SubmitButton";
import { LinkAsBackButton } from "./snippets/BackButton";

export default ({
  title,
  onSubmit,
  textField,
  error,
  backLink,
  submitting
}) => {
  return (
    <div className="container">
      <h4 className="red-text text-lighten-2">{title}</h4>
      <div className="row">
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row" style={{ marginBottom: "0px" }}>
              <Field
                name={textField.name}
                component={TextField}
                label={textField.label}
                onChange={textField.onChange}
              />
            </div>
            <div className="row">
              <DatePicker label="Release Date" error={error} />
            </div>
            <div className="row">
              <LinkAsBackButton link={backLink} />
              <SubmitButton submitting={submitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
