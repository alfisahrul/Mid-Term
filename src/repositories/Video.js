import Video from "../models/Video.js"


export const addVideoThumbnail = (url_thumbnail:thumbnail)=>{
    const newVideo = Video.insertOne()
}

export const getAllVideo = () =>{
    const allVideos = Video.find();

    return allVideos;
}

export const getVideoById = (id) =>{
    const video = Video.findById({_id:id})

    return video;
}
