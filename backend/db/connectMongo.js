import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb connected: ${conn.connection.host}`)
        
    } catch (error) {
      console.log(`Error in connect mongo: ${error.message}`);  
    }
}
export default connectMongo