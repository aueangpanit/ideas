import React from "react";

import Loading from "./Loading";
import Error from "./Error";

export default ({
  input,
  label,
  meta: { asyncValidating, touched, error }
}) => {
  return (
    <React.Fragment>
      <div className="input-field col s6">
        <input {...input} type="text" />
        <label>{label}</label>
        <Error touched={touched} error={error} />
      </div>
      <div className="col s6" style={{ paddingTop: "20px" }}>
        {asyncValidating ? <Loading /> : ""}
      </div>
    </React.Fragment>
  );
};
