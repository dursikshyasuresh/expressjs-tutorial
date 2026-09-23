// asyncHandler takes an async controller function as an argument
const asyncHandler = (fn) => {
    // execute the controller function
    // Promise.resolve() makes sure the result is handled as a promise
    // If an error occurs, catch(next) send error to Express error middleware
    return (req,res,next) => {
        Promise.resolve(fn(req,res,next)).catch(next)
    }
}

export default asyncHandler