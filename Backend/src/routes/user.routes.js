const express = require('express');
const identifyUser = require('../middleware/auth.middleware');
const userController = require('../controllers/user.controller')


const userRouter = express.Router();

// @route Post - /api/users/follow/username
// @description to follow a user
// @access private  
userRouter.post('/follow/:username', identifyUser, userController.followUserController )

// @route Post - /api/users/unfollow/username
// @description to unfollow a user
// @access private 
userRouter.post('/unfollow/:username', identifyUser , userController.unfollowUserController)

module.exports = userRouter;