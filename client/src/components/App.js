import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./header/Header";
import Landing from "./Landing";
import Profile from "./Profile";
import Signup from "./newUserForm/Signup";
import NewUserForm from "./newUserForm/NewUserForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/new_user_form" component={NewUserForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
