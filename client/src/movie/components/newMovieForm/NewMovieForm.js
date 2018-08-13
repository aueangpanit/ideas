import _ from "lodash";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import M from "materialize-css";

import utils from "../../../utils";
import validate from "./validate";
import * as actions from "../../actions";

import PleaseLogin from "../../../pleaseLogin";

const { TextFieldDatePickerForm } = utils.form.components;
const { Modal } = utils.form.components.snippets;

class NewMovieForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = _.debounce(this.onChange.bind(this), 400);
    this.onSubmit = this.onSubmit.bind(this);
    this.initMComponents = this.initMComponents.bind(this);
    this.datePickerOnSelect = this.datePickerOnSelect.bind(this);
    this.datePickerOnClose = this.datePickerOnClose.bind(this);
    this.checkUniqueMovie = this.checkUniqueMovie.bind(this);
    this.confirmUniqueMovie = this.confirmUniqueMovie.bind(this);

    this.state = {
      date: null,
      error: "",
      submitting: false
    };
  }

  initMComponents() {
    M.Datepicker.init(document.querySelectorAll(".datepicker"), {
      autoClose: true,
      onSelect: this.datePickerOnSelect,
      onClose: this.datePickerOnClose
    });
    M.Modal.init(document.querySelectorAll(".modal"), {});
  }

  componentDidMount() {
    this.initMComponents();
  }

  componentDidUpdate() {
    this.initMComponents();
    this.checkUniqueMovie();
  }

  checkUniqueMovie() {
    const { available } = this.props;

    if (!available) {
      const elem = document.getElementById("unique-movie-confirmation");
      const instance = M.Modal.getInstance(elem);

      instance.open();
    }
  }

  confirmUniqueMovie() {
    const { confirmUniqueMovie } = this.props;

    confirmUniqueMovie();
  }

  datePickerOnSelect(date) {
    this.setState({ date });

    this.onChange();
  }

  datePickerOnClose() {
    const { date } = this.state;

    if (!date) {
      this.setState({ error: "Please pick a release date" });
    } else {
      this.setState({ error: "" });
    }
  }

  onChange() {
    const { titleValue, checkAvailable } = this.props;
    const { date } = this.state;

    if (date && titleValue) {
      checkAvailable(titleValue, new Date(date).getFullYear());
    }
  }

  onSubmit() {
    const { date } = this.state;
    const { titleValue, submitNewMovie, available, history } = this.props;

    if (!date) {
      this.setState({ error: "Please pick a release date" });
    }

    if (date && available) {
      submitNewMovie({ title: titleValue, date }, history);
      this.setState({ submitting: true });
    }
  }

  render() {
    const { auth, handleSubmit } = this.props;
    const { error, submitting } = this.state;

    if (auth) {
      return (
        <React.Fragment>
          <Modal
            id="unique-movie-confirmation"
            header="Similar Movies"
            text="Are you sure the movie that you are about to add is unique? Please first review some similar movies below."
            onClick={this.confirmUniqueMovie}
            btnText="Yes, this movie is unique."
          />
          <TextFieldDatePickerForm
            title="Add Movie"
            onSubmit={handleSubmit(this.onSubmit)}
            textField={{
              name: "title",
              label: "Title",
              onChange: this.onChange
            }}
            error={error}
            backLink="/profile"
            submitting={submitting}
          />
        </React.Fragment>
      );
    }

    return <PleaseLogin />;
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector("newMovieForm");
  const titleValue = selector(state, "title");
  const releaseDateValue = selector(state, "releaseDate");

  return {
    auth: state.auth,
    available: state.movie.newMovieForm.available,
    titleValue,
    releaseDateValue
  };
};

NewMovieForm = connect(
  mapStateToProps,
  actions
)(withRouter(NewMovieForm));

export default reduxForm({
  form: "newMovieForm",
  validate
})(NewMovieForm);
