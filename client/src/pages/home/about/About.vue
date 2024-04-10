<script>
import Component from './Component.vue'

export default {
  components: {
    Component
  },
  data () {
    return {
      componentData1: {
        icon: 'fa-gift',
        title: 'Free ' + 'Download',
        description: 'Unlimited free conversions and downloads. for free '
      },
      componentData2: {
        icon: 'fa-video',
        title: 'Audio & Video',
        description:
          'Directly download Video & Audio into your downloads folder  '
      },
      componentData3: {
        icon: 'fa-circle-check',
        title: 'Easy Download',
        description:
          'Fully Compatible with all browsers , and also supports all types of devices '
      }
    }
  }
}
</script>
<template>
  <div class="about">
    <h2>Online Youtube Video downloader</h2>
    <p class="content">
      Y2meta.app allows you to convert & download video from YouTube, Facebook,
      Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD. Y2meta supports
      downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3,
      WEBM, etc. You can easily download for free thousands of videos from
      YouTube and other websites.
    </p>
  </div>
  <div class="components">
    <Component :data="componentData1"></Component>
    <Component :data="componentData2"></Component>
    <Component :data="componentData3"></Component>
  </div>
</template>

<style scoped>
.components {
  margin: 0 auto;
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5vh;
}
.about {
  margin-top: 10vh;
  text-align: center;
}
.about h2 {
  font-size: 2rem;
  margin-bottom: 0.6rem;
}
.about p {
  font-size: 1.3rem;
  width: 65%;
  margin: 0 auto;
  font-weight: 500;
}
</style>
