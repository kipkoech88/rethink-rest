const express = require("express");
const router = express.Router();
const HomeController = require('../controllers/api/Home')

router.get('/', HomeController.getIndex)

module.exports = router