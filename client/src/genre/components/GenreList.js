import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Fade from "react-reveal/Fade";

import { fetchGenres } from "../actions";

import utils from "../../utils";

const { List } = utils.list.components;

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
          <Fade key={genre.name} bottom>
            <div className="col s12">
              <div className="card-panel teal">
                <span className="white-text">{genre.name}</span>
              </div>
            </div>
          </Fade>
        );
      });
    }
  }

  render() {
    const {
      genre: { reachedEnd }
    } = this.props;

    const { loading } = this.state;

    return (
      <List
        loading={loading}
        title="Genres"
        listItems={this.renderGenres()}
        reachedEnd={reachedEnd}
      />
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
