// resuble function for creating custom errors
const ErrorMessage = (statusCode,message) => {
    // create a normal js Error object with the given message
    const error = new Error(message)
    
    // add http status code to the error object
    error.statusCode = statusCode

    // return the customized error
    return error
}

export default ErrorMessage