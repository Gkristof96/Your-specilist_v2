import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import providersData from './data/providers.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req,res) => {
    res.send('Api is running')
})

app.get('/api/providers', (req,res) => {
    res.json(providersData)
})

app.get('/api/providers/:id', (req,res) => {
    const provider = providersData.find((p) => p.id === req.params.id)
    res.json(provider)
})

const PORT = process.env.PORT || 50000

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))