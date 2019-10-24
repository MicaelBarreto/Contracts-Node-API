const express = require('express');
const router = express.Router();
const authController = require('../Controllers/AuthController');

router.get('/auth', authController.auth);

module.exports = router