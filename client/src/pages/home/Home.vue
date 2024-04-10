<script setup>
import Nav from './nav/Nav.vue'
import Tagline from './tagline/Tagline.vue'
import About from './about/About.vue'
import Download from './download/Download.vue'
</script>

<template>
  <div class="home">
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
  min-height: 100vh; /* Minimum height is set to 100% of the viewport height */
  height: auto;
}
</style>
