import axios from "axios";

import utils from "../utils";

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
