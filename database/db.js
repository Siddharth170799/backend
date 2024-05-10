import mongoose from "mongoose";




const Connection = async(username, password) => {
    const URL = 'mongodb://localhost:27017/iprotech'
    try {
        await mongoose.connect(URL, {  })
        console.log("connected to backend successfully");
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;


