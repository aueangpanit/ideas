import React from "react";

export default ({ text, error, submitting }) => {
  var btnClassName = "btn waves-effect waves-light right";
  if (error || submitting) {
    btnClassName += " disabled";
  }

  return (
    <button className={btnClassName} type="submit" name="action">
      {submitting ? "Submitting" : text || "Submit"}
      <i className="material-icons right">check</i>
    </button>
  );
};
