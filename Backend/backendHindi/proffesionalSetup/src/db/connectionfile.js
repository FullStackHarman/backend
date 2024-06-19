import mongoose from 'mongoose';
import DB_NAME from '../constants.js';

const connectDb = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MongoDb_URI}/${DB_NAME}`)

            console.log(`Connected Successfully To ${DB_NAME} Database at host ${connectionInstance.connection.host}`) }
    catch (err){
        console.log('Error connecting to Mongo DB', err);
        process.exit(1);
    }
}
export default connectDb;