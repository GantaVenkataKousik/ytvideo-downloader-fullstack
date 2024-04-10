<script setup>
import Nav from './nav/Nav.vue'
import Tagline from './tagline/Tagline.vue'
import About from './about/About.vue'
import Download from './download/Download.vue'
</script>

<template>
  <div className="home">
    <Nav></Nav>
    <Tagline></Tagline>
    <Download></Download>
    <About></About>
  </div>
</template>

<style scoped>
.home {
  background: #21588b;
  color: #fff;
  height: 100vh;
  overflow: hidden;
}
</style>
