<template>
  <div>
    我的用户名:{{ cname }}
    <el-button type="text" @click="dialogFormVisible1 = true">
      修改密码
    </el-button>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible1">
      <el-form :model="forml">
        <el-form-item label=" 用户名:" :label-width="formLabelWidth">
          {{ cname }}

          <el-form-item label="原密码" :label-width="formLabelWidth">
            <el-input v-model="forml.password" auto-complete="off" />
            <el-form-item label="新密码" :label-width="formLabelWidth">
              <el-input v-model="forml.npassword" auto-complete="off" />
              <el-form-item label="确认新密码" :label-width="formLabelWidth">
                <el-input v-model="forml.qpassword" auto-complete="off" />
              </el-form-item>
            </el-form-item>
          </el-form-item>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">
          取 消
        </el-button>
        <el-button type="primary" @click="xiugai()">
          确 定
        </el-button>
      </div>
    </el-dialog>
    <el-button type="text" @click="chongz()">
      重置密码
    </el-button>
    <list-delete :center-dialog-visible="visible" :tishi="ab" :neirong="cd" @qdelete="handleDelete()" @quxiao="quren()" />
  </div>
</template>
<script>
import listDelete from './listdelete'
export default {
  name: 'ChangePass',
  components: {
    listDelete: listDelete
  },
  data() {
    return {
      formLabelWidth: '',
      url: '/api/users/reset',
      forml: { password: '', npassword: '', qpassword: '' },
      dialogFormVisible1: false,
      cname: localStorage.getItem('name'),
      visible: false,
      ab: ' 重置密码',
      cd: '确认要重置密码？ '

    }
  },
  methods: {
    xiugai() {
      if (this.password === localStorage.getItem('psaaword')) {
        if (this.npassword === this.qpassword) {
          this.$http.post('/api/users', { name: this.cname, password: this.npassword }).then(res => {
            if (res.data.data === true) {
              alert('修改成功')
              localStorage.setItem('password', this.form.npassword)
              this.password = ''
              this.npassword = ''
              this.qpassword = ''
              this.dialogFormVisible1 = false
            } else {
              alert(' 修改失败')
            }
          })
        } else {
          alert('两次密码不一致')
        }
      } else {
        alert('原密码错误')
      }
    },
    chongz() {
      this.visible = true
    },
    quren() {
      this.visible = false
    },
    handleDelete() {
      this.$http.post('/api/users/reset', { name: this.cname }).then(res => {
        if (res.data.data === true) {
          alert('重置成功')
          this.$router.push('/login')
        } else {
          alert('重置失败')
        }
      })
    }

  }
}
</script>
