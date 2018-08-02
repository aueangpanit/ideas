import React from "react";

export default ({
  id,
  value,
  input,
  label,
  classSize,
  meta: { error, touched }
}) => {
  return (
    <div className={`input-field col ${classSize ? classSize : "s12"}`}>
      <input {...input} id={`${id}-field`} type="text" />
      <label className={value ? "active" : ""} htmlFor={`${id}-field`}>
        {label}
      </label>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
