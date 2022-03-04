const express = require('express');
const  User  = require('../controllers/authUserController')

const router = express.Router();

router.post("/auth", User.authenticateUser)

module.exports = router;