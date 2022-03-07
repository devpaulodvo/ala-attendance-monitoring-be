const express = require('express');

const VerifyPersonnel = require('../controllers/updateUserVerifiedController');

const router = express.Router();

router.post("/verify/personnel", VerifyPersonnel.updateUserStatus);

module.exports = router;