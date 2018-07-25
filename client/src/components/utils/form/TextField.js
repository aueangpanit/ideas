import React from "react";

export default ({ input, label, classSize, meta: { error, touched } }) => {
  return (
    <div className={`input-field col ${classSize ? classSize : "s12"}`}>
      <input {...input} id="username-field" type="text" />
      <label htmlFor="username-field">{label}</label>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
