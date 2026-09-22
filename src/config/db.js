import mongoose from "mongoose"

const dbConnect = async () => {
     try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected sucessfully.")
     } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`)
        process.exit(1)
     }
}

export default dbConnect