import mongoose from "mongoose";

const videoSchma = new  mongoose.Schema({
    url:{
        type: String,
        required: true,
    },
 

});

const Video = new mongoose.model

export default Video;