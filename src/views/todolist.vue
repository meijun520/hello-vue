<template>
  <div>
    <div class="todolist">
      <input v-model="inputvalue">
      <button @click="tijiao()">
        提交
      </button>
      <ul>
        <todo-item v-for="(item,index) in list " :key="index" :conent="item" :index="index" @delect="shanchu()" />
      </ul>
    </div>
    <div class="test">
      1
    </div>1
    <div class="test">
      2
    </div>2
    <div class="test">
      3
    </div>3
    <span>4</span>
  </div>
</template>
<script>
import todoitem from '../components/todoitem'
export default {
  name: 'Todolist',
  components: { 'todo-item': todoitem },
  data() {
    return {
      inputvalue: '',
      list: []
    }
  },
  methods: {
    tijiao() {
      this.list.push(this.inputvalue)
      this.inputvalue = ''
    },
    shanchu(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="scss"  scoped >
.test{
  height:50px;
  width:50px;
  background:red;
  border: 1 solid #ffffff
}
</style>>

