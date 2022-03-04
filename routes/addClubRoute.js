const express = require('express');
const Club = require('../controllers/addClubController')

const router = express.Router();

router.post("/club/addclub", Club.addClub)

module.exports = router;