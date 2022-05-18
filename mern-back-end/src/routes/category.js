const express = require("express");
const Category = require("../models/category");
const slugify = require("slugify");
const { addCategory, getCategories } = require("../controller/category");
const { requireSignIn, adminMiddleware } = require("../common-middleware");
const router = express.Router();
const shortId = require("shortId");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/category/create",
  requireSignIn,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getcategory", getCategories);

module.exports = router;
