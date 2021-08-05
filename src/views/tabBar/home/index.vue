<!-- Home -->
<template>
  <div class="home-container">
    <div class="title">
      <h1>{{userInfo.introduction}}：{{userInfo.name}}</h1>
    </div>
    <div class="content">
      <van-image round width="2rem" height="2rem" :src="userInfo.avatar"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { fetchPostData } from '@/api'
import { USER } from '@/api/url'
import { Toast } from 'vant'
import { RESPONSE_DATA } from '@/model/types'
export interface IuserInfo {
  introduction?: string,
  name?: string,
  avatar?: string
}
export default defineComponent({
  name: 'home',
  props: {},
  setup () {
    const userInfo = ref<IuserInfo>({})
    async function getUserInfo () {
      try {
        const res: RESPONSE_DATA<IuserInfo> = await fetchPostData(USER.GET_USERINFO)
        userInfo.value = res.data
      } catch (e) {
        Toast.fail(e)
        console.log(e)
      }
    }
    onMounted(() => {
      getUserInfo()
    })
    return {
      userInfo
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
