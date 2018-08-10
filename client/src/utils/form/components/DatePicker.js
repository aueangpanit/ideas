import React from "react";

import Error from "./Error";

export default ({ label, error }) => {
  return (
    <div className="input-field col s6">
      <input id={label} type="text" className="datepicker" />
      <label htmlFor={label}>{label}</label>
      <Error touched={true} error={error} />
    </div>
  );
};
