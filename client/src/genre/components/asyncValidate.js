import debounce from "debounce-promise";
import axios from "axios";

const asyncValidate = async values => {
  if (values.genre) {
    const res = await axios.get(`/api/genre/available/${values.genre}`);
    const { available } = res.data;

    if (!available) {
      const error = { genre: "This genre already exist." };
      throw error;
    }
  }
};

export default debounce(asyncValidate, 400);
