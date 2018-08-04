import debounce from "debounce-promise";
import axios from "axios";

const asyncValidate = async values => {
  if (values.username) {
    const res = await axios.get(
      `/api/profile/is_username_available/${values.username}`
    );
    const { available } = res.data;
    if (!available) {
      const error = { username: "That username is already taken." };
      throw error;
    }
  }
};

export default debounce(asyncValidate, 400);
