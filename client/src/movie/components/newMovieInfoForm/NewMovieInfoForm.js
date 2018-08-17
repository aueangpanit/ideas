import React, { Component } from "react";
import { connect } from "react-redux";

import Synopsis from "./Synopsis";
import Poster from "./Poster";
import PleaseLogin from "../../../pleaseLogin";
import SomethingWentWrong from "./SomethingWentWrong";

class NewMovieInfoForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage() {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  previousPage() {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  render() {
    const { auth, currentMovie } = this.props;
    const { page } = this.state;

    if (!auth) {
      return <PleaseLogin />;
    }

    if (!currentMovie) {
      return <SomethingWentWrong />;
    }

    return (
      <React.Fragment>
        <div className="container">
          <h4 className="red-text text-lighten-2">
            {`${currentMovie.title} (${new Date(
              currentMovie.releaseDate
            ).getFullYear()})`}
          </h4>
        </div>
        <div>
          {page === 1 && <Synopsis onSubmit={this.nextPage} />}
          {page === 2 && <Poster previousPage={this.previousPage} />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    auth,
    movie: { currentMovie }
  } = state;

  return {
    auth,
    currentMovie
  };
};

export default connect(mapStateToProps)(NewMovieInfoForm);
