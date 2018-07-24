var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });

module.exports = app => {
  app.get("/s3Test", async (req, res) => {
    // Create S3 service object
    s3 = new AWS.S3({ apiVersion: "2006-03-01" });

    // Call S3 to list current buckets
    const buckets = await s3.listBuckets().promise();

    res.send(buckets);
  });
};
