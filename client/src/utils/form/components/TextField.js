import React from "react";

export default ({ id, input, meta: { touched, error } }) => {
  return (
    <div className="input-field col s6">
      <input {...input} id={id} type="text" className="validate" />
      <label htmlFor={id}>Username</label>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
