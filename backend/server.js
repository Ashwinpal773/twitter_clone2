import express from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import connectMongo from "./db/connectMongo.js";
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); //to parse request body
app.use(express.urlencoded({ extended: true })); //to parse form data

// console.log(process.env.MONGO_URL);
app.use("/api/auth/",authRoutes)



app.listen(5001, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongo()
})