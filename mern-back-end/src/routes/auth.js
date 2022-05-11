const express = require('express');
const { signup, signin, requireSignIn } = require('../controller/auth');
const router = express.Router();
const User = require('../models/user');


router.post('/signup',signup);
router.post('/signin',signin);

// router.post('/profile', requireSignIn, (req, res) => {
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;