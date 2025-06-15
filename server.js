import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

//app config
const app = express()
const port = 4000

//middlware
// app.use(express.json())
// app.use(cors()) 

//connect with database
connectDB()

app.get("/", (req,res)=>{
    res.send("hi im the api i just spawned lolcam")
})

app.listen(port, ()=>{
    console.log(`Server Started on localhost:${port}`)
})

// mongodb+srv://samjp0001:s@Mypwd2d2b!@cluster0.0yc2rmj.mongodb.net/?