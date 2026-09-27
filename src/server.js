import express from "express"
import dbConnect from "./config/db.js"
import todoRoute from "./routes/todo.route.js"
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv"
import errorHandler from "./middlewares/error.middleware.js"
import morgan from "morgan"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4500

// database connection
dbConnect()

// built-in middleware
app.use(express.json())   // parse json data
app.use(express.urlencoded({extended: true}))  // parse html form data

// third party middleware
// provide info about every request that reaches your server
app.use(morgan('dev'))   


// Home route: http://localhost:4000
app.get("/", (req,res) => {
    res.json({
        message: "Express server is running."
    })
})

// routes
app.use("/api",todoRoute)
app.use("/api/auth",authRoute)



// error handling middleware
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})