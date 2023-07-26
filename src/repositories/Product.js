import Product from "../models/Product.js";

export const AddProduct = (url_thumbnail:thumbnail)=>{
    const newProduct = Product.insertOne()
}

export const getAllProduct = () =>{
    const allProduct = Product.find();

    return allVideo;
}

export const getProductById = (id) =>{
    const Product = Product.findById({_id:id})

    return video;
}
