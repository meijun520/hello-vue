<template>
  <div>
    <div>我的用户名：{{ name }}</div>
    <!-- <button @click="cpassword()">
      修改密码
    </button> -->
    <el-button type="text" @click="dialogFormVisible = true">
      修改密码
    </el-button>

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="原密码" :label-width="formLabelWidth">
          <el-input v-model="form.oword" auto-complete="off" type="password" />
        </el-form-item>
        <el-form-item label="修改后密码" :label-width="formLabelWidth">
          <el-input v-model="form.nword" auto-complete="off" type="password" />
        </el-form-item>
        <el-form-item label="确认修改后密码" :label-width="formLabelWidth">
          <el-input v-model="form.nword2" auto-complete="off" type="password" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary" @click="cpassword()">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {
      name: localStorage.getItem('name'),
      dialogFormVisible: false,
      formLabelWidth: '',
      form: { name: localStorage.getItem('name'), oword: '', nword: '', nword2: '' }
    }
  },
  methods: {
    cpassword() {
      if (this.form.oword !== localStorage.getItem('password')) {
        alert(' 原密码错误')
      } else {
        if (this.form.nword === this.form.nword2) {
          this.$http.post('/api/users', { name: this.form.name, password: this.form.nword }).then(res => {
            if (res.data.data === true) {
              alert('修改成功')
              localStorage.setItem('password', this.form.nword)
              this.form = { name: '', oword: '', nword: '', nword2: '' }
              this.dialogFormVisible = false
            } else {
              alert('修改失败')
            }
          })
        } else {
          alert('两次密码不一致')
        }
      }
    }
  }

}
</script>

<style >

</style>
