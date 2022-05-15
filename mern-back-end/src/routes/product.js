const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify');
// const { addCategory, getCategories } = require('../controller/category');
const {createProduct} = require('../controller/product');
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const multer = require('multer');
const router = express.Router();
const shortId = require('shortId');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
     cb(null, shortId.generate() + '-' + file.originalname);
    }
  })


const upload = multer({ storage });


router.post('/product/create', requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct );


// router.get('/category/getcategory', getCategories);

 


module.exports = router;