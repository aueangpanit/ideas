import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const updateUsername = (values, history) => async dispatch => {
  const res = await axios.post("/api/profile/update/username", values);
  history.push("/profile");

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
