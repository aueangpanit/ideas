import debounce from "debounce-promise";
import axios from "axios";

const asyncValidate = async values => {
  if (values.title && values.year) {
    const res = await axios.get(
      `/api/movie/available/${values.title}/${values.year}`
    );
    const { available } = res.data;

    if (!available) {
      const error = { title: "This movie already exist." };
      throw error;
    }
  }
};

export default debounce(asyncValidate, 400);
