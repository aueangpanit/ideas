import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import LoginDropdownContent from "./LoginDropdownContent";

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

  renderNav(id) {
    return (
      <div>
        <li>
          <a href="sass.html">Signup</a>
        </li>
        <li>
          <a
            className="dropdown-trigger"
            href="#!"
            data-target={`${id}-dropdown-content`}
          >
            Login<i className="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      </div>
    );
  }

  render() {
    return (
      <div>
        <LoginDropdownContent id={HEADER} />

        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">
              lisit
            </a>
            <a href="#" data-target={MOBILE_SIDEBAR} class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.renderNav(HEADER)}
            </ul>
          </div>
        </nav>

        <LoginDropdownContent id={MOBILE_SIDEBAR} />

        <ul class="sidenav" id={MOBILE_SIDEBAR}>
          {this.renderNav(MOBILE_SIDEBAR)}
        </ul>
      </div>
    );
  }
}

export default Header;
