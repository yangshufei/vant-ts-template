<!-- Home -->
<template>
  <div class="home-container">
    <div class="title">
      <h1>首页</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home',
  props: {},
  setup () {
    return {

    }
  }
})
</script>
<style lang="scss" scoped>
.home-container {
  .title {
    padding: 12px;
    background: #fff;
    font-size: 20px;;
  }
}
</style>
