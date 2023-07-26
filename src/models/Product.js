import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    link: {
        type:String,
    },
    title: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
});

const Product = mongoose.Model('Product',productSchema);

export default Product;