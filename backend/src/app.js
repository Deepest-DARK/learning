import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: '10kb' }))  // for json data
app.use(express.urlencoded({ extended: true, limit: '20kb' })) // for application/x-www-form-urlencoded
app.use(cookieParser())    // for handling cookies

// routes import
import userRouter from './routes/user.route.js'


// routers declaration
app.use('/api/v1/users',userRouter)

export { app }