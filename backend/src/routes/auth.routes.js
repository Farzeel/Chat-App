import express from "express"
import { loginController, logoutController, signUpController } from "../controller/auth.controller.js"

const route = express.Router()

route.post("/signup",signUpController)
route.post("/login",loginController)
route.post("/logout",logoutController)

export default route