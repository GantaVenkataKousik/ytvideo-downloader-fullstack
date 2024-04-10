<template>
  <div class="component">
    <div>
      <i :class="'fa-solid ' + data.icon"></i>
    </div>
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
  </div>
</template>

<script>
import { defineComponent, defineProps } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.component {
  margin: 1rem;
  border: 2px solid #d24e53;
  background: transparent;
  border-radius: 1rem;
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 20%;
}
.component i {
  font-size: 1.9rem;
  margin-bottom: 0.3rem;
  color: #fff;
}
.component h3 {
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
}
.component p {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
