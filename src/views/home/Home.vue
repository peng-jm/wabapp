<template lang="html">
<div>
  <MySwiper></MySwiper>
  <TabBar></TabBar>
  <h1 v-text="msg"></h1>
</div>
</template>

<script>
import { mapState } from "vuex"
const MySwiper = ()=>import('@/components/MySwiper.vue')
const TabBar = ()=>import('@/components/TabBar.vue')

export default {
  components: {
    MySwiper,
    TabBar
  },
  computed:{
	...mapState('good',['msg']),
  },
}
</script>

<style lang="scss" scoped>
</style>
