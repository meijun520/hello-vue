<template>
  <div>
    <router-view />
    <!-- <ul class="fooler">
      <li>
        <router-link to="/li2">
          新闻列表
        </router-link>
      </li>
      <li>
        <router-link to="/add">
          个人中心
        </router-link>
      </li>
    </ul> -->
    <el-menu mode="horizontal" :default-active="'1'" style="position:fixed;buttom:0;width:100%">
      <el-menu-item index="1">
        <router-link to="/li2/list">
          新闻列表
        </router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to="/li2/detail">
          个人中心
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Li2',
  mounted() {
    // this.$http.post('/api/login', { name: 111, password: 123 })
  },
  methods: {
  }

}
</script>

<style scoped lang="scss">

</style>
