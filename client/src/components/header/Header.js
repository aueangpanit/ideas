import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import { LOGIN_DROPDOWN, USER_DROPDOWN } from "./dropdownContents";
import DropdownContent from "./DropdownContent";
import Navigation from "./Navigation";

const HEADER = "header";
const MOBILE_SIDEBAR = "mobile-sidebar";

class Header extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      hover: true,
      constrainWidth: false
    });
  }

  render() {
    return (
      <div>
        <DropdownContent
          id={HEADER}
          content={this.props.auth ? USER_DROPDOWN : LOGIN_DROPDOWN}
        />

        <nav>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              lisit
            </Link>
            <a data-target={MOBILE_SIDEBAR} className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <Navigation id={HEADER} auth={this.props.auth} />
            </ul>
          </div>
        </nav>

        <DropdownContent
          id={MOBILE_SIDEBAR}
          content={this.props.auth ? USER_DROPDOWN : LOGIN_DROPDOWN}
        />

        <ul className="sidenav" id={MOBILE_SIDEBAR}>
          <Navigation id={MOBILE_SIDEBAR} auth={this.props.auth} />
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
