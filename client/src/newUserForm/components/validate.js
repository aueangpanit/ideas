const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "Please enter a username.";
  }

  return errors;
};

export default validate;
