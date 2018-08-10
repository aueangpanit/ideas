import axios from "axios";

import { CHECK_MOVIE_AVAILABLE, NEW_MOVIE_SUBMIT } from "./actionTypes";

export const checkAvailable = (title, year) => async dispatch => {
  const res = await axios.get(`/api/movie/available/${title}/${year}`);

  dispatch({
    type: CHECK_MOVIE_AVAILABLE,
    payload: res.data
  });
};

export const confirmUniqueMovie = () => {
  return {
    type: CHECK_MOVIE_AVAILABLE,
    payload: { available: true }
  };
};

export const submitNewMovie = (values, history) => async dispatch => {
  const res = await axios.post("/api/movie/new", {
    title: values.title,
    releaseDate: values.date
  });

  history.push("/movie/new/info");

  dispatch({
    type: NEW_MOVIE_SUBMIT,
    payload: res.data
  });
};
