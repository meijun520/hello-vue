<template>
  <div>
    haode
    <input v-model="item" type="text">
    <button @click="add">
      添加
    </button>
  </div>
</template>
<script>
export default {
  name: 'Add',
  data() {
    return {
      item: ''
    }
  },
  methods: {
    add() {
      window.lists ? window.lists.push(this.item) : window.lists = [this.item]
      this.$router.push('/li2/list')
    }
  }

}
</script>

<style >

</style>
