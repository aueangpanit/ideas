import React from "react";
import { Link } from "react-router-dom";

import { LOGIN_DROPDOWN, USER_DROPDOWN } from "./dropdownContents";

const Navigation = ({ id, auth }) => {
  if (auth) {
    return (
      <div>
        <li />
        <li>
          <a
            className="dropdown-trigger"
            data-target={`${id}-${USER_DROPDOWN.name}-content`}
          >
            {auth.username ? auth.username : "User"}
            <i className="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      </div>
    );
  }

  return (
    <div>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <a
          id={`${id}-dropdown-trigger`}
          className="dropdown-trigger"
          data-target={`${id}-${LOGIN_DROPDOWN.name}-content`}
        >
          Login
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </div>
  );
};

export default Navigation;
