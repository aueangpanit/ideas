import React from "react";

export default ({ touched, error }) => {
  return (
    <div className="red-text" style={{ marginBottom: "20px" }}>
      {touched && error}
    </div>
  );
};
