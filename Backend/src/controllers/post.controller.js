const postModel = require("../models/post.model");
const likeModel = require('../models/like.model')
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "fileName",
    folder: "instagram_clone"
  });


  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id
  })

  res.status(201).json({
    message: "Post created successfully.",
    post
  })
}

async function getPostsController (req , res){

  const posts = await postModel.find({ user: req.user.id})

  res.status(200).json({
    message : "Posts fetched successfully.",
    posts
  })
}

async function getPostDetailsController (req , res){

  const userId = req.user.id;
  const postId = req.params.id;
  
  const post = await postModel.findById(postId);
  if(!post){
    return res.status(404).json({
      message : "Post not found."
    })
  }

  const isValid = post.user.toString() === userId
  if(!isValid){
    return res.status(403).json({
      message : "Forbidden content"
    })
  }
  res.status(200).json({
    message : "Post details fetched successfully.",
    post
  })
}


async function likePostController(req,res){
    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post not found."
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: "Post liked successfully.",
        like
    })
}

module.exports = {
  createPostController,
  getPostsController,
  getPostDetailsController,
  likePostController
};
