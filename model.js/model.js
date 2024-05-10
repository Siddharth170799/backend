import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true, unique: false },
    price: { type: Number, required: true, unique: false },
    description: { type: String, required: true, unique: false }
});

const GetDetails = mongoose.model("Product", ProductSchema);
export default GetDetails;
