import React from "react";

export default ({ onChange }) => {
  return (
    <div className="col s6">
      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input onChange={event => onChange(event.target.files)} type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
    </div>
  );
};
