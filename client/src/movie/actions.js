import axios, { post } from "axios";

import { CHECK_MOVIE_AVAILABLE, FETCH_MOVIE } from "./actionTypes";

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
    type: FETCH_MOVIE,
    payload: res.data
  });
};

export const submitNewMovieInfo = (
  currentMovie,
  values,
  history
) => async dispatch => {
  var res = { data: currentMovie };

  if (values.synopsis) {
    // update everything apart from poster
    res = await axios.post(`/api/movie/update/info/${currentMovie._id}`, {
      synopsis: values.synopsis
    });
  }
  // update poster
  if (values.poster) {
    const url = `/api/movie/update/poster/${currentMovie._id}`;
    const formData = new FormData();
    formData.append("poster", values.poster);
    const config = {
      header: {
        "content-type": "multipart/form-data"
      }
    };

    res = await post(url, formData, config);
  }

  history.push("/movie");

  dispatch({
    type: FETCH_MOVIE,
    payload: res.data
  });
};
