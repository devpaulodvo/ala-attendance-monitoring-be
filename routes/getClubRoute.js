const express = require('express');
const Club = require('../controllers/getClubsController')

const router = express.Router();

router.get("/get/clubs", Club.getClubs)

module.exports = router;
