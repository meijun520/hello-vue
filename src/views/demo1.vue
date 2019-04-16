<template>
  <div>
    <div>
      <ul>
        <li
          v-for="(item,index) in lists"
          :key="index"
          :class="{active:index===current&&current!==''}"
          @click="choose(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <button @click="add()">
        添加
      </button>
      <ul>
        <li v-for="(item,index) in lists2" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Demo1',
  data() {
    return {
      current: '',
      lists: [1, 2, 3, 4, 5, 6],
      lists2: []
    }
  },
  mounted() {
    let a = 0
    for (let i = 1; i <= 9; i = i + 2) {
      console.log(a, i)
      a = a + i
    }
    console.log(a)
  },
  methods: {
    choose(index) {
      this.current = index
    },
    add() {
      if (this.current === '') { return }
      this.lists2.push(this.lists[this.current])
      this.current = ''
    }
  }
}
</script>

<style >
li.active{
  background:green
}

</style>
