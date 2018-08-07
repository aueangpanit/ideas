export default values => {
  const error = {};

  if (!values.genre) {
    error.genre = "Please enter a genre.";
  }

  return error;
};
