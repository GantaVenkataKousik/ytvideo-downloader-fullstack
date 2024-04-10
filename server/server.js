import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import mongoose from 'mongoose'
import ytdl from 'ytdl-core'
import fs from 'fs'

//intailising expresss

const app = express()

//middlewares
// Enables Cross-Origin Resource Sharing for your server.
app.use(cors())
// Parses JSON data in incoming requests.
app.use(express.json())
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

async function connectDB (req, res) {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose
      .connect(
        'mongodb+srv://GantaVenkataKousik:VKousik330066@cluster0.kslyn8z.mongodb.net/',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
      .then(() => {
        console.log('Connected to MongoDB')
      })
  } catch (err) {
    console.log('error connecting to MongoDB:', err)
  }
}
connectDB()

const usercntSchema = new mongoose.Schema(
  {
    userCnt: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)

const userCnt = mongoose.model('userCnt', usercntSchema)

app.get('/fetchPosts', async (req, res) => {
  try {
    const posts = await reviews.find()
    return res.status(200).json(posts)
  } catch (err) {
    console.error(err) // Corrected from console(err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/downloadVideo', async (req, res) => {
  try {
    const { URL } = req.body
    console.log(URL)
    await userCnt.update({ userCnt }, { $set: { userCnt: userCnt + 1 } })
    return res.status(201)
  } catch (err) {
    console.error(err) // Corrected from console(err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(9002, () => {
  console.log(
    `Server running on ${9002} Mode on the Port ${process.env.PORT}`.bgBlue
  )
})
