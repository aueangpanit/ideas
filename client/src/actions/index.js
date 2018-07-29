import axios, { post } from "axios";
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
  // update username
  const res = await axios.post("/api/profile/update/username", {
    username: values.username
  });

  // update profile picture
  if (values.file) {
    const url = `/api/profile/update/profile_picture/${values.username}`;
    const formData = new FormData();
    formData.append("file", values.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    await post(url, formData, config);
  }

  history.push("/profile");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
