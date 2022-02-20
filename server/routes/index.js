const express = require('express')
const router = express.Router()
const {protect} = require('../controllers/auth')

const {landing} = require('../controllers/index')

router.route('/').get(protect, landing)

module.exports = router