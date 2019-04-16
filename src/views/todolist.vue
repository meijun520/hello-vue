<template>
  <div class="todolist">
    <input v-model="inputvalue">
    <button @click="tijiao()">
      提交
    </button>
    <ul>
      <todo-item v-for="(item,index) in list " :key="index" :conent="item" :index="index" @delect="shanchu()" />
    </ul>
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
