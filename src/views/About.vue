<template>
  <div class="about">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="{'active':current==index&&current!==''}"
        @click="choose(index)"
      >
        {{ item }}
      </li>
    </ul>
    <button @click="add()">
      add
    </button>
    <ul>
      <li v-for="(item,index) in target" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      current: '',
      target: []
    }
  },
  methods: {
    choose(index) {
      this.current = index
    },
    add() {
      if (this.current !== '') {
        this.target.push(this.list[this.current])
        this.current = ''
      }
    }
  }

}
</script>
<style  scoped>
li.active{
  background-color: aqua
}

</style>
