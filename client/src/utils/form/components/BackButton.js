import React from "react";
import { Link } from "react-router-dom";

export function BackButton_Link({ link }) {
  return (
    <Link className="waves-effect waves-light btn left" to={link}>
      Back
    </Link>
  );
}

export function BackButton_Button({ onClick }) {
  return (
    <button onClick={onClick} className="waves-effect waves-light btn left">
      Back
    </button>
  );
}
