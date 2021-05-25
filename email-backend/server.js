import express from "express"
import cors from "cors"
import router from "./api/route.js"

// express server
const app = express()
// middleware
app.use(cors())
app.use(express.json()) // allows server to accept json in request

// specify routes
app.use("/", router)
app.use("*", (req, res) => res.status(404).json({error:"page not found"})) // non-existing routes

export default app