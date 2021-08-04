<!-- layouts -->
<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer" v-if="$route.meta.showTab">
      <TabBar :tabList="tabList" :defaultActive="defaultActive" @change="handleChange" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import TabBar, { ITabList } from '@/components/tabBar/index.vue'
import { useRoute } from 'vue-router'
interface ILayoutState {
  tabList: Array<ITabList>
  defaultActive: number
}
export default defineComponent({
  name: 'layouts',
  components: {
    TabBar
  },
  setup () {
    const route = useRoute()
    const state: ILayoutState = reactive({
      tabList: [
        { title: '首页', to: { name: 'home' }, icon: 'home-o' },
        { title: '关于我', to: { name: 'about' }, icon: 'user-o' }
      ],
      defaultActive: computed(() => {
        return state.tabList.findIndex((item: ITabList) => {
          return item.to.name === route.name
        })
      })
    })
    const handleChange = (v: number) => {
      console.log(v)
    }

    return {
      ...toRefs(state),
      handleChange
    }
  }
})
</script>
<style lang="scss" scoped></style>
