import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import searchRoutes from './routes/searchRoutes.js'
import userRoutes from './routes/userRoutes.js'
import providerRoutes from './routes/providerRoutes.js'
import offerRoutes from './routes/offerRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/provider', providerRoutes)
app.use('/api/offer', offerRoutes)

app.post('/api/email', (req,res) => {
  console.log(req.body)
  res.send('Message received')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)