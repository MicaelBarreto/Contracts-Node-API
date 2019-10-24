const express = require('express');
const router = express.Router();
const authController = require('../Controllers/AuthController');

router.post('/auth', authController.auth);

module.exports = router