const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
