<template>
  <div>
    <div>
      <el-tabs>
        <el-tab-pane label="新闻列表" name="first">
          <new-list :id="id1" @mmmsss="testfunction" />
        </el-tab-pane>

        <el-tab-pane label="个人中心" name="second">
          <changePass />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import newList from './com.vue'
import changePass from './changepass.vue'

export default {
  name: 'Main',
  components: {
    newList: newList,
    changePass: changePass

  },
  data() {
    return {
      id1: 1

    }
  },

  methods: {
    testfunction(a) {
      alert(a)
    }

  }

}
</script>
<style  scoped>

</style>
