import mongoose from "mongoose"

const dbConnect = async () => {
     try {
        await mongoose.connect("mongodb://localhost:27017/todoDB")
        console.log("MongoDB connected sucessfully.")
     } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`)
        process.exit(1)
     }
}

export default dbConnect