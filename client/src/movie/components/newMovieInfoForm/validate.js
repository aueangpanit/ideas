export default values => {
  const errors = {};

  if (values.synopsis) {
    if (values.synopsis.length > 2000) {
      errors.synopsis = "Max length exceeded! Please remove some characters.";
    }
  }

  return errors;
};
