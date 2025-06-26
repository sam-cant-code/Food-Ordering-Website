import express from 'express'
import { addFood, deleteFood, listFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb )=>{
          return cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage})



foodRouter.post("/add", upload.single('image'), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/deleted", deleteFood)


// foodRouter.get("/test", (req, res) => {
//   res.send("✅ Food router is working");
// });
// foodRouter.use((req, res) => {
//   res.status(404).send(`Route not found: ${req.method} ${req.originalUrl}`);
// });



export default foodRouter; 

