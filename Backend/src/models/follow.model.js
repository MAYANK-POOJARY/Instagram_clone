const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
        required: [ true, "Follower is required" ]
    },
    followee: {
        type: String,
        required: [ true, "Followee is required" ]
    },
    status:{
        type:String,
        default : "pending",
        enums : {
            value : ["pending", "approved", "rejected"],
            message : "The status can be pending, approved or reject"
        }
    }
}, {
    timestamps: true
})

followSchema.index({follower: 1 , followee:1}, {unique : true})

const followModel = mongoose.model("follow", followSchema);

module.exports = followModel