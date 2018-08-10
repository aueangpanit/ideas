import React from "react";

import Error from "./Error";

export default ({ input, label, dataLength, meta: { touched, error } }) => {
  return (
    <div className="input-field col s12">
      <textarea
        {...input}
        id={label}
        className="materialize-textarea"
        data-length={dataLength}
      />
      <label htmlFor={label}>{label}</label>
      <Error touched={touched} error={error} />
    </div>
  );
};
