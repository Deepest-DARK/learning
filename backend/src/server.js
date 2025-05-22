import connectDB from './db/db.js'
import dotenv from 'dotenv'
dotenv.config() // dotenv.config({ path: '' })
import { app } from './app.js'

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is listening on http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error('Mongodb connection failed ', err);

    })