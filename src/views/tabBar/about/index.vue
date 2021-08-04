<!-- about -->
<template>
  <div class="about-container">
    <div class="title">
      <h1>关于我</h1>
    </div>
    <div class="content">
      <van-cell title="姓名" :value="userInfo.name" />
      <van-cell title="年龄" :value="userInfo.age" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'about',
  props: {},
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('user/GetUserInfo')
    })
    const userInfo = computed(() => {
      return store.state.user.userInfo
    })
    return {
      userInfo
    }
  }
})
</script>
<style lang="scss" scoped>
.about-container {
  height: 100vh;
  .title {
    padding: 12px;
    font-size: 20px;;
  }
}
</style>
