import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import "dotenv/config"
import userRouter from "./routes/userRoute.js"

//app config
const app = express()
const port = 4000

//middlware
app.use(express.json())
app.use(cors()) 

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

//connect with database
connectDB()

app.get("/", (req,res)=>{
    res.send("dflaksjdlfajd;lfja;ldjkfa;l")
})

app.listen(port, ()=>{
    console.log(`Server Started on localhost:${port}`)
})

