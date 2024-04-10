<script setup>
import Home from './pages/home/Home.vue'
import './assets/main.css'
import './assets/responsive.css'
</script>

<template>
  <div id="app"><Home></Home></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

header {
  line-height: 1.5;
}

#app {
  font-family: 'Inria Sans', sans-serif;
  font-weight: 700;
  font-style: normal;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
