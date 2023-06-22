const express = require("express")
const route = express.Router()
const apiController = require('../controllers/api/blog')

route.get('/', apiController.getIndex)