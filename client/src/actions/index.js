import axios from "axios";
import { FETCH_USER, IS_USERNAME_AVAILABLE } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const checkUsername = username => async dispatch => {
  var res = { data: null };
  if (username) {
    res = await axios.get(`/api/profile/is_username_avaliable/${username}`);
  }
  dispatch({
    type: IS_USERNAME_AVAILABLE,
    payload: Object.assign({ loading: false }, res.data)
  });
};

export const checkUsernameLoading = () => {
  return {
    type: IS_USERNAME_AVAILABLE,
    payload: { loading: true }
  };
};

export const newUserFormSubmit = (values, history) => async dispatch => {
  const res = await axios.post("/api/profile/update/username", {
    username: values.username
  });

  // do two post requist for update username and upload file to s3.

  //axios post to s3

  history.push("/profile");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
