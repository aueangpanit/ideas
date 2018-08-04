const multer = require("multer");
const multerS3 = require("multer-s3");

var bucketName =
  process.env.NODE_ENV === "production" ? "lisit-prod" : "lisit-dev";
var bucketRegion = "eu-west-2";
var AWS = require("aws-sdk");
AWS.config.update({ region: bucketRegion });
const s3 = new AWS.S3({
  apiVersion: "2006-03-01"
});

module.exports = multer({
  limits: { fileSize: 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.substring(0, 5) === "image") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `profile_picture/${req.user.id}`);
    }
  })
});
