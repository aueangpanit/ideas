import React from "react";

export default ({ text }) => {
  return (
    <div className="red-text">
      <i className="material-icons left">error</i>
      {text}
    </div>
  );
};
