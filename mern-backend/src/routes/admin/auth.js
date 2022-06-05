const express = require('express');
const { requiresSignIn } = require('../../common-middleware');
const { signup, signin, signout } = require('../../controller/admin/auth');
const router = express.Router();
const {validateSigninRequest,validateSignupRequest,isRequestValidated}=require('../../validators/auth')

router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);

router.post('/admin/signout', signout);

module.exports = router;