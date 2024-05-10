



import express from "express";

import mongoose from "mongoose";
import GetDetails from "./model.js/model.js";
import productRouter from "./Routers/productRouter.js";
import Connection from "./database/db.js";
const port = 7009;

const app = express()

app.use('/api',productRouter
)


mongoose.connect('mongodb://localhost:27017/iprotech')
.then(()=>{
    console.log('db connected successfully')
})
.catch(err=>console.log(err))

app.post('/product',async(req,res)=>{
   
    try{
        const {name,price,description} = req.body;
        const result =  await GetDetails.create({name,price,description});
        return res.status(201).json({
            status:'Success',
            result
            
        })
    }catch(err){
            return res.status(400).json({
                status:"fail",
                error:err.message
            })
    }
    
})


app.listen(port,()=>{
    console.log(`App listening at port ${port}`)
})

Connection()
