import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
// const port = process.env.PORT || 3000
const port = 3000
const mongoUri = process.env.MONGO_URI || ''

app.use(cors())
app.use(express.json())

// 连接 MongoDB
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// 简单路由
app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB backend!')
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend111' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
