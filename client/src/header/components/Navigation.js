import React, { Component } from "react";
import { Link } from "react-router-dom";

import utils from "../../utils";
import config from "../../config";

const { LOGIN_DROPDOWN } = utils.auth.data;
const { USER_DROPDOWN } = utils.profile.data;
const { S3_BUCKET } = config.routes;

class Navigation extends Component {
  renderIfLoggedIn() {
    const { id, auth } = this.props;

    return (
      <div>
        <li>
          <div
            style={{ width: "40px", paddingTop: "12px", marginLeft: "20px" }}
          >
            <img
              src={`${S3_BUCKET}/profile_picture/${auth._id}.png`}
              alt=""
              className="circle responsive-img"
            />
          </div>
        </li>
        <li>
          <a
            className="dropdown-trigger"
            data-target={`${id}-${USER_DROPDOWN.name}-content`}
          >
            {auth.username || "User"}
            <i className="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      </div>
    );
  }

  renderIfNotLoggedIn() {
    const { id } = this.props;
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
  }

  render() {
    const { auth } = this.props;
    if (auth) {
      return this.renderIfLoggedIn();
    }

    return this.renderIfNotLoggedIn();
  }
}

export default Navigation;
