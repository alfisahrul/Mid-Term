import mongoose from "mongoose";

const commentSchma = new  mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    comment_text:{
        type: String,
        required: true,
    },
    video_id:{
        type: String,
        required: true,
    },
    created_at:{
        type:String,
        required:Date.now
    }

});