<template>
  <div class="infor">
    测试新建router
    <button type="button" @click="add">
      添加
    </button>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'Info',
  store,
  methods: {
    add: function() {
      console.log('abcd')
      store.commit('increase')
    }
  }
}
</script>
