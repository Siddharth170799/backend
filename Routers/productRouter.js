import  express  from "express";
import GetDetails from "../model.js/model.js";
import expressAsyncHandler from "express-async-handler"


const productRouter=express.Router();

productRouter.post("/post",expressAsyncHandler(async(req,res)=>{
    const createProduct=new GetDetails({
        name:"Socks",
        price:300,
        description:"adidas"
    })
    const newProduct= await createProduct.save();
    res.send({message:"product created",product:newProduct,status:200})
}))
productRouter.post('/post1',expressAsyncHandler(async(req,res)=>{
    const createProduct2=new GetDetails({
        name:"shoes",
        price:500,
        description:"puma"
    })
    const newProduct2= await createProduct2.save();
    res.send({message:"product created",product:newProduct2,status:200})
}))


productRouter.get(
    '/get',
    expressAsyncHandler(async(req,res)=>{


        const details=await GetDetails.find();
        res.send({message:"getting details",userdata:details,status:200})
        
    })
)

productRouter.delete("/delete/:id",
expressAsyncHandler(async(req,res)=>{
    const {id}=req.params

    const product=await GetDetails.findByIdAndDelete(id)
    res.send({message:"deleted",userdata:product,status:200})
}))


productRouter.put("/put/:id",
expressAsyncHandler(async(req,res)=>{
    const {id}=req.params
    const details2={
        name:"shirt",
        price:300,
        description:"t shirts here are of high quality"
    }
    
    const get5=await GetDetails.findByIdAndUpdate(id,details2)
    res.send({message:"updated",user:get5,status:200})
}))
export default productRouter

