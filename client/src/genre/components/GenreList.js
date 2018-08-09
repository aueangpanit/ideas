import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Fade from "react-reveal/Fade";

import { fetchGenres } from "../actions";

class GenreList extends Component {
  constructor(props) {
    super(props);

    this.onScroll = _.throttle(this.onScroll.bind(this), 200);

    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const { fetchGenres } = this.props;

    await fetchGenres();
    this.setState({ loading: false });
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  async onScroll() {
    const { genre, fetchGenres } = this.props;
    const { loading } = this.state;

    if (genre) {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        genre.genres.length &&
        !loading &&
        !genre.reachedEnd
      ) {
        this.setState({ loading: true });
        await fetchGenres(genre.last_id);
        this.setState({ loading: false });
      }
    }
  }

  renderGenres() {
    const { genre } = this.props;

    if (genre) {
      return _.map(genre.genres, genre => {
        return (
          <Fade bottom>
            <div key={genre.name} className="col s12">
              <div className="card-panel teal">
                <span className="white-text">{genre.name}</span>
              </div>
            </div>
          </Fade>
        );
      });
    }
  }

  renderLoading() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div
          className="progress"
          style={{
            paddingBottom: "0px",
            marginBottom: "0px",
            position: "fixed",
            bottom: "0px"
          }}
        >
          <div className="indeterminate" />
        </div>
      );
    }

    return <div />;
  }

  render() {
    const {
      genre: { reachedEnd }
    } = this.props;

    return (
      <React.Fragment>
        {this.renderLoading()}
        <div className="container">
          <h4 className="red-text text-lighten-2">Genre</h4>
          <div className="row">{this.renderGenres()}</div>
          <div className="row center-align">
            {reachedEnd ? "You have reached the end!" : ""}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    genre: state.genre
  };
};

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenreList);
