import React from "react";

export default ({ text, error }) => {
  var btnClassName = "btn waves-effect waves-light right";
  if (error) {
    btnClassName += " disabled";
  }

  return (
    <button className={btnClassName} type="submit" name="action">
      {text || "Submit"}
      <i className="material-icons right">check</i>
    </button>
  );
};
