import React from "react";

import Error from "./Error";

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="input-field col s12">
      <textarea {...input} id={label} className="materialize-textarea" />
      <label htmlFor={label}>{label}</label>
      <Error touched={touched} error={error} />
    </div>
  );
};
