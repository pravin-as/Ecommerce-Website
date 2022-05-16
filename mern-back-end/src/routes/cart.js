const express = require('express');
const { addItemToCart } = require('../controller/cart');
const { requireSignIn, userMiddleware } = require('../common-middleware');
const router = express.Router();


router.post('/user/cart/addtocart', requireSignIn, userMiddleware,  addItemToCart);





module.exports = router;