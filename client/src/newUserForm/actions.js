import axios, { post } from "axios";

import utils from "../utils";

const { FETCH_USER } = utils.auth.actionTypes;

export const newUserFormSubmit = (values, history) => async dispatch => {
  // update username
  const res = await axios.post("/api/profile/update/username", {
    username: values.username
  });
  // update profile picture
  if (values.file) {
    const url = "/api/profile/update/profile_picture";
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
