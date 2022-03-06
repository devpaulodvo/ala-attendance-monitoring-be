const express = require('express');

const  VerifyRole  = require('../controllers/verifyRoleController')

const router = express.Router();

router.post("/verifyrole", VerifyRole.verifyUserRole)

module.exports = router;