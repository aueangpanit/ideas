import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import utils from "../../utils";

import Header from "../../header";
import Landing from "../../landing";
import Profile from "../../profile";
import newUserForm from "../../newUserForm";
const { Signup, NewUserForm } = newUserForm;

const { fetchUser } = utils.auth.actions;

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
  { fetchUser }
)(App);
