import dotenv from 'dotenv'
import app from './app.js'

import connectDb from './db/connectionfile.js'
dotenv.config({path:'./env'})

connectDb()
.then(
    app.listen(process.env.PORT||3000, ()=>{
        console.log('Server is running on port: ', process.env.PORT||3000)
    })

    )
.then(app.on("error",(err)=>{console.log(`Hey folks we are having ERROR:${err}`)}))
    .catch((err)=>{
    console.log(err)
})





// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// (async ()=>{
//     try {
//         await mongoose.connect`${process.env.MONGO_URI}/${DB_NAME}`
        
//     } catch (error) {
//         console.log(error)
//     }
// })()

