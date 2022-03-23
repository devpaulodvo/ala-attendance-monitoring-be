const express = require('express');
const SchoolYear = require('../controllers/getSchoolYearController');

const router = express.Router();

router.get("/get/schoolyear", SchoolYear.getSchoolYear)

module.exports = router;