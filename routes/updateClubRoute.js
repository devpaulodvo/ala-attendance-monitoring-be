const express = require('express');

const Club = require('../controllers/updateClubController');

const router = express.Router();

router.post("/update/club", Club.updateClub);

module.exports = router;