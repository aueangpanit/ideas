import _ from "lodash";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import M from "materialize-css";

import utils from "../../../utils";
import validate from "./validate";
import * as actions from "../../actions";

import PleaseLogin from "../../../pleaseLogin";
import UniqueMovieComfirmation from "./UniqueMovieComfirmation";

const {
  TextField,
  DatePicker,
  LinkAsBackButton,
  SubmitButton
} = utils.form.components;

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
          <UniqueMovieComfirmation
            id="unique-movie-confirmation"
            header="Similar Movies"
            text="Are you sure the movie that you are about to add is unique? Please first review some similar movies below."
            onClick={this.confirmUniqueMovie}
            btnText="Yes, this movie is unique."
          />
          <div className="container">
            <h4 className="red-text text-lighten-2">Add Movie</h4>
            <div className="row">
              <div className="col s12">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <div className="row" style={{ marginBottom: "0px" }}>
                    <Field
                      name="title"
                      component={TextField}
                      label="Title"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="row">
                    <DatePicker label="Release Date" error={error} />
                  </div>
                  <div className="row">
                    <LinkAsBackButton link="/profile" />
                    <SubmitButton submitting={submitting} />
                  </div>
                </form>
              </div>
            </div>
          </div>
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
