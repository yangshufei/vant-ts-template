<!-- Rem -->
<template>
  <div class="rem">Rem适配</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'test',
  props: {},
  setup () {
  }
})
</script>
<style lang="scss" scoped>
.rem {
  display: flex;
  width: 750px;
  height: 375px;
  font-size: 24px;
  background: pink;
}
</style>
