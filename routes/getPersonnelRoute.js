const express = require('express');
const  Personnel  = require('../controllers/getPersonnelController')

const router = express.Router();

router.get("/get/personnel", Personnel.getPersonnel)

module.exports = router;