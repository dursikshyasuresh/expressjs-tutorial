import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorMessage from "../utils/ErrorMessage.js";
import bcrypt from "bcryptjs"

/**
 * @desc register user
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(async(req,res) => {
     const {fullName,email,password,role} = req.body

     // check if email already exists or not
     const existingEmail = await User.findOne({email})

     if(existingEmail) throw ErrorMessage(409,"Email already exists!")

    // hashing password using bcryptjs
    const hashedPassword = await bcrypt.hash(password,10)    

    // create user
    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        role
    }) 
    
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    })
})


/**
 * @desc login user
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(async(req,res) => {

})