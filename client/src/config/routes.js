export const S3_BUCKET = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://s3.eu-west-2.amazonaws.com/lisit-prod";
  }

  return "https://s3.eu-west-2.amazonaws.com/lisit-dev";
};
