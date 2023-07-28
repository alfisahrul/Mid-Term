import express from "express";
import dotenv from "dotenv";
import videoRouter from "./routes/Video.js"
import commentRouter from "./routes/Comment.js";
import productRouter from "./routes/Product.js";
import mongodbConn from "./config/Mongodb.js"

dotenv.config();

const start = () =>{
    const app = express();
    const mongoHost = process.env.MONGODB_HOST;

    mongodbConn(mongoHost);

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use(videoRouter);
    app.use(commentRouter);
    app.use(productRouter);

    app.listen(3000,()=>{
        console.log(`Server listen to PORT 3000`);
    })
}

start();