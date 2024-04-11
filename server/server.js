import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
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
app.use(express.urlencoded({ extended: true }))

app.get('/fetchPosts', async (req, res) => {
  try {
    const posts = await reviews.find()
    return res.status(200).json(posts)
  } catch (err) {
    console.error(err) // Corrected from console(err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

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
app.get('/', async (req, res) => {
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        <!-- Add any CSS styles here if needed -->
      </head>
      <body>
        <div class="container">
          <h1>Welcome!</h1>
          <p>Hello, and welcome to our website.</p>
          <!-- Add any additional content or elements here -->
        </div>
      </body>
      </html>
    `

  res.send(htmlContent)
})
app.listen(9002, () => {
  console.log(
    `Server running on ${9002} Mode on the Port ${process.env.PORT}`.bgBlue
  )
})
