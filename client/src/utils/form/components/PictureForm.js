import React from "react";

import FileField from "./snippets/FileField";
import { ButtonAsBackButton } from "./snippets/BackButton";
import SubmitButton from "./snippets/SubmitButton";

export default ({
  onSubmit,
  img,
  fileField,
  backButton,
  submitButton,
  error
}) => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="container">
                <img
                  id={img.id}
                  alt={img.alt}
                  className="materialboxed"
                  width={img.width || "100"}
                  height={img.height || "100"}
                  style={{ objectFit: "cover" }}
                  src={img.src}
                />
              </div>
            </div>
            <div className="row">
              <FileField
                placeholderText={fileField.placeholderText}
                onChange={fileField.onChange}
                error={error}
              />
            </div>
            <div className="row">
              <ButtonAsBackButton onClick={backButton.onClick} />
              <SubmitButton
                id="submit-button"
                submitting={submitButton.submitting}
                text={submitButton.text}
                error={error}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
