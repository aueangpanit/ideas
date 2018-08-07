const multer = require("multer");
const multerS3 = require("multer-s3-transform");
const sharp = require("sharp");
const AWS = require("aws-sdk");

const BUCKET_NAME =
  process.env.NODE_ENV === "production" ? "lisit-prod" : "lisit-dev";
const bucketRegion = "eu-west-2";

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
    bucket: BUCKET_NAME,
    acl: "public-read",
    shouldTransform: function(req, file, cb) {
      cb(null, /^image/i.test(file.mimetype));
    },
    transforms: [
      {
        id: "thumbnail",
        key: function(req, file, cb) {
          cb(null, `profile_picture/${req.user.id}.png`);
        },
        transform: function(req, file, cb) {
          cb(
            null,
            sharp()
              .resize(100, 100)
              .png()
          );
        }
      }
    ]
  })
});
