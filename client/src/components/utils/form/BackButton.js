import React from "react";
import { Link } from "react-router-dom";

export default ({ link }) => {
  return (
    <Link className="waves-effect waves-light btn left" to={link}>
      Back
    </Link>
  );
};
