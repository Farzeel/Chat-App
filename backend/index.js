import  express  from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectDb from "./src/db/connectDb.js";
import {app, server} from "./src/socket/socket.js";
import path from "path"
import { job } from "./cron.js";

dotenv.config()

const port  = process.env.PORT || 8000
const __dirname = path.resolve();





app.use(express.json())
app.use(cookieParser())

job.start()

connectDb().then(()=>{
    server.listen(port, ()=>{
        console.log("App is listening on port ", port)
    })
})
.catch((err)=>{
     console.log("Database connection failed", err)
})
app.use(express.static(path.join(__dirname, "/frontend/dist")));



// import ROUTES
import authRoute from "./src/routes/auth.routes.js"
import messageRoute from "./src/routes/message.routes.js"
import userRoute from "./src/routes/user.routes.js"



app.use("/api/auth" , authRoute)
app.use("/api/message" , messageRoute)
app.use("/api/user" , userRoute)
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

