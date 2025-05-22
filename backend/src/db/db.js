import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected , DB HOST : `, connectionInstance.connection.host);

    } catch (error) {
        console.error("Mongodb connectin failed !!! : \n", error);
    }
}

export default connectDB;