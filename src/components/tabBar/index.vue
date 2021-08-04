<template>
  <van-tabbar v-model="active" fixed route class="vant__tabbar">
    <van-tabbar-item v-for="(item, index) in tabList" :to="item.to" :icon="item.icon" :key="index">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export interface ITabList {
  title: string
  to: {name: string},
  icon: string
}
export default defineComponent({
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    tabList: {
      type: Array as PropType<ITabList[]>,
      default: () => {
        return []
      }
    }
  },
  setup (props) {
    const active = ref(props.defaultActive)
    return {
      active
    }
  }
})
</script>

<style lang="scss">
.vant__tabbar {
  background-color: #f7f7fa !important;
}
</style>
