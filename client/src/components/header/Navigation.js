import React from "react";

import { LOGIN_DROPDOWN, USER_DROPDOWN } from "./dropdownContents";

const Navigation = ({ id, auth }) => {
  return (
    <div>
      <li>
        <a href="sass.html">Signup</a>
      </li>
      <li>
        <a
          className="dropdown-trigger"
          data-target={
            auth
              ? `${id}-${LOGIN_DROPDOWN.name}-content`
              : `${id}-${LOGIN_DROPDOWN.name}-content`
          }
        >
          {auth ? "User" : "Login"}
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </div>
  );
};

export default Navigation;
