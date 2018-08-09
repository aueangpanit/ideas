import axios from "axios";

import utils from "../utils";
import { FETCH_GENRES } from "./actionTypes";

const { FETCH_USER } = utils.auth.actionTypes;

export const genreFormSubmit = (values, history) => async dispatch => {
  const res = await axios.post("/api/genre/new", {
    genre: values
  });

  history.push("/profile");

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchGenres = list_id => async dispatch => {
  const res = await axios.get(`/api/genre/${list_id || ""}`);

  dispatch({
    type: FETCH_GENRES,
    payload: res.data
  });
};
