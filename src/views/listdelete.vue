<template>
  <div>
    <el-dialog
      :title="tishi"
      :visible.sync="centerDialogVisible"
      :before-close="cancelDialog"
      width="30%"
      center
    >
      <span>{{ neirong }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="quxiao()">取 消</el-button>
        <el-button type="primary" @click="shanchu()">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Listdelete',
  props: {
    centerDialogVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    tishi: {
      type: String,
      required: false,
      default: ''
    },
    neirong: {
      type: String,
      required: false,
      default: ''
    }

  },
  // data() {
  //   return {
  //     ab: '好的'

  //   }
  // },
  methods: {
    shanchu() {
      this.$emit('qdelete')
    },
    cancelDialog() {
      this.$emit('update:centerDialogVisible', false)
      this.$emit('quxiao')
    },
    quxiao() {
      this.$emit('quxiao')
    }
  }

}
</script>
<style  scoped>

</style>
