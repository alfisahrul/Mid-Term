


export const addComment = (username,)=>{
    const newVideo = Video.insertOne()
}

export const getAllComment = () =>{
    const allVideo = Video.find();

    return allVideo;
}

export const getCommentById = (id) =>{
    const video = Video.findById({_id:id})

    return video;
}
