import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";

import Navigation from "./Navigation";
import DropdownContents from "./DropdownContents";

const HEADER = "header";
const MOBILE_SIDEBAR = "mobile-sidebar";

class Header extends Component {
  componentDidMount() {
    this.initMaterializeComponents();
  }

  componentDidUpdate() {
    this.initMaterializeComponents();
  }

  initMaterializeComponents() {
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      hover: true
    });
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
  }

  render() {
    const { auth } = this.props;

    return (
      <div>
        <DropdownContents id={HEADER} auth={auth} />

        <nav>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              lisit
            </Link>
            <a data-target="mobile-sidebar" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <Navigation id={HEADER} auth={auth} />
            </ul>
          </div>
        </nav>

        <DropdownContents id={MOBILE_SIDEBAR} auth={auth} />

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
