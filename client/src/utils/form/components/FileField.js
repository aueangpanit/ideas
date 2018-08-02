import React from "react";

export default ({ placeholderText, meta: { error, touched } }) => {
  return (
    <div className="file-field input-field col s6">
      <div className="btn">
        <span>File</span>
        <input type="file" multiple />
      </div>
      <div className="file-path-wrapper">
        <input
          className="file-path validate"
          type="text"
          placeholder={placeholderText}
        />
      </div>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
