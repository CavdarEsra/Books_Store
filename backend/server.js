import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

//App configuration
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

//API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res)=>{
    res.send('API succesfull connected!')
})

app.listen(port, ()=>{
    console.log('Server is running on PORT: ' + port)
})