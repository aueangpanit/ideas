import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";

import DropdownContent from "./DropdownContent";
import Navigation from "./Navigation";
import utils from "../../utils";

const { LOGIN_DROPDOWN } = utils.auth.data;
const { USER_DROPDOWN } = utils.profile.data;
const HEADER = "header";
const MOBILE_SIDEBAR = "mobile-sidebar";

class Header extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      hover: true
    });
    M.Dropdown.init(document.querySelector("#header-dropdown-trigger"), {
      hover: true,
      constrainWidth: false
    });
  }

  render() {
    const { auth } = this.props;

    return (
      <div>
        <DropdownContent
          id={HEADER}
          content={auth ? USER_DROPDOWN : LOGIN_DROPDOWN}
        />

        <nav className="grey darken-4">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              lisit
            </Link>
            <a data-target={MOBILE_SIDEBAR} className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <Navigation id={HEADER} auth={auth} />
            </ul>
          </div>
        </nav>

        <DropdownContent
          id={MOBILE_SIDEBAR}
          content={auth ? USER_DROPDOWN : LOGIN_DROPDOWN}
        />

        <ul className="sidenav" id={MOBILE_SIDEBAR}>
          <Navigation id={MOBILE_SIDEBAR} auth={auth} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Header);
