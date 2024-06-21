const asyncHandler =  (requestHandler)=>{(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>{next(err)})
}}
export {asyncHandler}


// const secondasynchandler = (handler)=>{
//     async(req,res,next)=>{ try {
//         await handler(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json(
//             success: false,
//             message: error.message
//         )
//     }

//     }
// }