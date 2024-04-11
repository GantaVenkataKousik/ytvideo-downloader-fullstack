import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import mongoose from 'mongoose'
import ytdl from 'ytdl-core'
import fs from 'fs'
import pkg from 'blob'
const { Blob } = pkg

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

async function downloadYouTubeVideo (url, fileName, res) {
  try {
    const videoStream = ytdl(url, { quality: 'highestaudio' })

    // Create a writable stream to save the video
    const fileStream = fs.createWriteStream(fileName)

    // Pipe the video stream to the file stream
    videoStream.pipe(fileStream)

    // When the video stream ends, convert the video to a Blob
    videoStream.on('end', () => {
      // Read the downloaded file into a Buffer
      const fileBuffer = fs.readFileSync(fileName)

      // Create a Blob from the Buffer
      const blob = new Blob([fileBuffer], { type: 'video/mp4' })

      // Create a Blob URL
      const blobUrl = URL.createObjectURL(blob)

      // Create an anchor element for downloading the video
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName

      // Trigger the download
      link.click()

      // Clean up
      URL.revokeObjectURL(blobUrl)
      fs.unlinkSync(fileName)
    })

    // Handle errors
    videoStream.on('error', err => {
      console.error('Error downloading video:', err)
      res.status(500).send('Error downloading video.')
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('Internal Server Error')
  }
}

// Route to initiate video download
app.post('/downloadVideo', async (req, res) => {
  try {
    const { url } = req.body
    const videoStream = ytdl(url, { quality: 'highestaudio' })
    const fileName = 'video.mp4' // Temporary file name

    // Create a writable stream to save the video
    const fileStream = fs.createWriteStream(fileName)

    // Pipe the video stream to the file stream
    videoStream.pipe(fileStream)

    // When the video stream ends, send the file to the client
    videoStream.on('end', () => {
      // Set the Content-Type header
      res.setHeader('Content-Type', 'video/mp4')

      // Send the file to the client
      res.download(fileName, 'downloaded_video.mp4', err => {
        if (err) {
          console.error('Error sending file:', err)
          res.status(500).send('Error sending file')
        } else {
          // Remove the file after it has been sent
          fs.unlinkSync(fileName)
          console.log('File sent and removed successfully')
        }
      })
    })

    // Handle errors
    videoStream.on('error', err => {
      console.error('Error downloading video:', err)
      res.status(500).send('Error downloading video.')
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('Internal Server Error')
  }
})
app.listen(9002, () => {
  console.log(
    `Server running on ${9002} Mode on the Port ${process.env.PORT}`.bgBlue
  )
})
