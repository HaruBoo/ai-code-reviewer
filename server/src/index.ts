import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { reviewRouter } from './review'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.use('/api', reviewRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})