import React from "react";
import { Link } from "react-router-dom";

export function LinkAsBackButton({ link }) {
  return (
    <Link className="waves-effect waves-light btn left" to={link}>
      Back
    </Link>
  );
}

export function ButtonAsBackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="waves-effect waves-light btn left"
    >
      Back
    </button>
  );
}
