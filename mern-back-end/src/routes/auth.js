const express = require('express');
const { signup, signin } = require('../controller/auth');
const {check} = require('express-validator')
const router = express.Router();
const User = require('../models/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');


router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);

// router.post('/profile', requireSignIn, (req, res) => {
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;