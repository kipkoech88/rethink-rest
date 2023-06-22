const express = require("express");
const router = express.Router();
const apiController = require('../controllers/api/blog')

router.get('/', apiController.getIndex)

module.exports = router