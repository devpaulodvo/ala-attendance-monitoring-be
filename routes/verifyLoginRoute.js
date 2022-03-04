const express = require('express');
const  Verify  = require('../controllers/verifyLoginController')

const router = express.Router();

router.post("/verify", Verify.verifyLoginController)

module.exports = router;