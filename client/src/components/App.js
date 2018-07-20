import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./header/Header";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
