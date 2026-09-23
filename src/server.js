import express from "express"
import dbConnect from "./config/db.js"
import todoRoute from "./routes/todo.route.js"
import dotenv from "dotenv"
import errorHandler from "./middlewares/error.middleware.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4500

// database connection
dbConnect()

// middleware
app.use(express.json())   // parse json data

// Home route: http://localhost:4000
app.get("/", (req,res) => {
    res.json({
        message: "Express server is running."
    })
})

// routes
app.use("/api",todoRoute)



// error handling middleware
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})