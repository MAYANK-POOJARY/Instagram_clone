const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {

  const token = req.cookies.token; // token of the user
  if (!token) {
    return res.status(401).json({
      message: "Token not provided , Unauthorized access.",
    });
  }

  let decoded = null; // decoded token containing the user id will be stored in this variable
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message : "User is not authorized."
    })
  }

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "fileName",
    folder: "instagram_clone"
  });


  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id
  })

  res.status(201).json({
    message: "Post created successfully.",
    post
  })
}
module.exports = {
  createPostController,
};
