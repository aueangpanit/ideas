import React from "react";
import { Field } from "redux-form";

import TextArea from "./snippets/TextArea";
import SubmitButton from "./snippets/SubmitButton";

export default ({
  onSubmit,
  fieldName,
  fieldLabel,
  dataLength,
  submitButtonText
}) => {
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row">
              <Field
                name={fieldName}
                component={TextArea}
                label={fieldLabel}
                dataLength={dataLength}
              />
            </div>
            <div className="row">
              <SubmitButton text={submitButtonText} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
