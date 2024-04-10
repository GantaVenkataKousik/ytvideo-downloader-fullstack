<template>
  <nav class="nav-container">
    <div class="logo-title">
      <img src="/images/nav/logo.png" /><span>yt_gvk</span>
    </div>
    <div class="container">
      <li>youtube HD 4k</li>
      <li>youtube video to mp3</li>
      <li>
        <span><i class="fa-solid fa-caret-down"></i></span>English
      </li>
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  margin: 0 auto;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 4vh 0;
}
.nav-container .logo-title {
  display: flex;
  align-items: center;
}
.nav-container .logo-title span {
  margin-left: 0.3rem;
  font-size: 1.6rem;
}
.nav-container img {
  height: 2.4rem;
  widows: 3.5rem;
  border-radius: 1rem;
  margin-right: 0.2rem;
}
.nav-container .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
.nav-container .container li {
  transition: 0.5s;
}
.nav-container .container li span {
  margin-right: 0.2rem;
}
@media screen and (max-width: 550px) {
  .nav-container .container {
    display: none;
  }
  .nav-container {
    display: block;
  }
  .nav-container .logo-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script></script>
