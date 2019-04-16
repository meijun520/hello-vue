<template>
  <div class="todoitem">
    <li @click="hah">
      {{ conent }}
    </li>
  </div>
</template>
<script>

export default {
  props: ['conent', 'index'],
  methods: {
    hah() {
      this.$emit('delect', this.index)
    }
  }

}
</script>
<style scoped>
div{color:aqua}
</style>

