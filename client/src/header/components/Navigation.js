import React, { Component } from "react";
import { Link } from "react-router-dom";

import utils from "../../utils";
import config from "../../config";
import CONTRIBUTE_DROPDOWN from "../data/contributeDropdownOptions";
import DropdownTrigger from "./DropdownTrigger";

const { LOGIN_DROPDOWN } = utils.auth.data;
const { USER_DROPDOWN } = utils.profile.data;
const { S3_BUCKET } = config.routes;

class Navigation extends Component {
  renderIfLoggedIn() {
    const { id, auth } = this.props;

    return (
      <div>
        <li>
          <DropdownTrigger
            id={id}
            content={CONTRIBUTE_DROPDOWN}
            text="Contribute"
          />
        </li>
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
          <DropdownTrigger
            id={id}
            content={USER_DROPDOWN}
            text={auth.username || "User"}
          />
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
          <DropdownTrigger id={id} content={LOGIN_DROPDOWN} text="Login" />
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
