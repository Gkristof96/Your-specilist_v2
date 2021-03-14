import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/providers', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 50000

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))