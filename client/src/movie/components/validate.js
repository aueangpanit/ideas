export default values => {
  const error = {};

  if (!values.title) {
    error.title = "Please enter a title.";
  }

  return error;
};
