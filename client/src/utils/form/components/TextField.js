import React from "react";

import Loading from "./Loading";

export default ({
  input,
  label,
  meta: { asyncValidating, touched, error }
}) => {
  return (
    <div>
      <div className="input-field col s6">
        <input {...input} type="text" />
        <label>{label}</label>
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </div>
      <div className="col s6" style={{ paddingTop: "20px" }}>
        {asyncValidating ? <Loading /> : ""}
      </div>
    </div>
  );
};
