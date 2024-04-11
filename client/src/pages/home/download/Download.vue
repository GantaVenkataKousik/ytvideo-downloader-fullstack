<template>
  <div class="download">
    <h1>Download HD Youtube Videos</h1>
    <input placeholder="Paste your URL here...." v-model="videoUrl" />
    <button @click="downloadVideo">
      Download <i class="fa-solid fa-download"></i>
    </button>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
export default {
  data () {
    return {
      videoUrl: ''
    }
  },
  methods: {
    async downloadVideo () {
      try {
        const response = await fetch(
          'https://ytvideo-downloader-api.vercel.app/downloadVideo',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: this.videoUrl })
          }
        )

        if (response.ok) {
          const blob = await response.blob()
          const blobUrl = URL.createObjectURL(blob)

          // Create a link element
          const link = document.createElement('a')
          link.href = blobUrl
          link.download = 'downloaded_video.mp4'

          // Append the link to the document body
          document.body.appendChild(link)

          // Programmatically click the link to trigger the download
          link.click()

          // Clean up by removing the link and revoking the blob URL
          document.body.removeChild(link)
          URL.revokeObjectURL(blobUrl)
        } else {
          console.error('Failed to download video:', response.statusText)
        }
      } catch (error) {
        console.error('Error downloading video:', error)
      }
    },
    showConfetti () {
      // Trigger confetti effect
      confetti({
        particleCount: 500,
        spread: 100,
        origin: { y: 0.6 },
        velocity: 100
      })
    }
  }
}
</script>

<style scoped>
.download {
  text-align: center;
}
.download h1 {
  font-size: 3rem;
  margin: 1rem;
}
input {
  outline: none;
  border: 2px solid #d24e53;
  padding: 1rem 1.5rem;
  border-radius: 3.5rem;
  font-size: 1.3rem;
  width: 45%;
  display: block;
  margin: 0 auto;
  margin-top: 3vh;
  margin-bottom: 2vh;
  color: #39393b;
}
input::placeholder {
  font-size: 1.35rem;
  color: #4a4b4d;
  font-weight: 540;
}
button {
  background: #d24e53;
  outline: none;
  border: 2px solid #ffffff;
  padding: 0.9rem 1.7rem;
  border-radius: 1rem;
  color: #fff;
  font-size: 2.05rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
button:hover {
  background: #fff;
  color: #d24e53;
  transition: 0.5s;
  box-shadow: 5px 5px 10px #d24e53;
}
@media screen and (max-width: 550px) {
  .home {
    width: 100%;
  }
  .download h1 {
    font-size: 2.5rem;
    margin: 1rem;
  }
  input {
    outline: none;
    border: 2px solid #d24e53;
    padding: 0.7rem 1rem;
    border-radius: 3.5rem;
    font-size: 1.2rem;
    width: 85%;
    display: block;
    margin: 0 auto;
    margin-top: 2vh;
    margin-bottom: 1vh;
    color: #39393b;
  }
  input::placeholder {
    font-size: 1.1rem;
  }
  button {
    background: #d24e53;
    outline: none;
    border: 2px solid #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.3rem;
    margin-top: 0.5vh;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
}
</style>
