import React from "react";

import Loading from "./Loading";

export default ({
  id,
  input,
  label,
  meta: { asyncValidating, touched, error }
}) => {
  return (
    <div>
      <div className="input-field col s6">
        <input {...input} id={id} type="text" className="validate" />
        <label className="active" htmlFor={id}>
          {label}
        </label>
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
