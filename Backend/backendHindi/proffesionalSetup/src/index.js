import dotenv from 'dotenv'

import connectDb from './db/connectionfile.js'
dotenv.config({path:'./env'})

connectDb()





// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// (async ()=>{
//     try {
//         await mongoose.connect`${process.env.MONGO_URI}/${DB_NAME}`
        
//     } catch (error) {
//         console.log(error)
//     }
// })()

