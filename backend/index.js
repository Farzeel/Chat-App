import  express  from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectDb from "./src/db/connectDb.js";
import cors from "cors"

dotenv.config()

const port  = process.env.PORT || 8000

const app = express()
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
   
}))

app.use(express.json())
app.use(cookieParser())

connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log("App is listening on port ", port)
    })
})
.catch((err)=>{
     console.log("Database connection failed", err)
})


// import ROUTES
import authRoute from "./src/routes/auth.routes.js"
import messageRoute from "./src/routes/message.routes.js"
import userRoute from "./src/routes/user.routes.js"

app.use("/api/auth" , authRoute)
app.use("/api/message" , messageRoute)
app.use("/api/user" , userRoute)

