import React from "react";

import Error from "./Error";

export default ({ placeholderText, error, onChange }) => {
  return (
    <div className="file-field input-field col s6">
      <div className="btn">
        <span>File</span>
        <input
          onChange={event => onChange(event.target.files)}
          type="file"
          multiple
        />
      </div>
      <div className="file-path-wrapper">
        <input
          className="file-path validate"
          type="text"
          placeholder={placeholderText}
        />
      </div>
      <Error touched={true} error={error} />
    </div>
  );
};
