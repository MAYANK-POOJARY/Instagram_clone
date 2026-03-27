const express = require("express");
const authController = require('../controllers/auth.controller');
const identifyUser = require("../middleware/auth.middleware");

const authRouter = express.Router()

// @routes POST /api/auth/register
authRouter.post('/register' , authController.registerController)

// @routes POST /api/auth/login
authRouter.post('/login', authController.loginController)

// @routes GET /api/auth/login
authRouter.get('/get-me', identifyUser, authController.getMeController)

module.exports = authRouter