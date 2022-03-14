const express = require('express');
const SchoolYear = require('../controllers/addSchoolYearController');

const router = express.Router();

router.post("/schoolyear/add", SchoolYear.addSchoolYear)

module.exports = router;