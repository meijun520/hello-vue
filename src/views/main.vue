<template>
  <div>
    <div>
      <el-tabs>
        <el-tab-pane label="新闻列表" name="first">
          <new-list :id="id1" @mmmsss="testfunction" />
        </el-tab-pane>

        <el-tab-pane label="个人中心" name="second">
          <changePass />
          <!-- <el-dialog title="修改密码" :visible.sync="dialogFormVisible1">
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
          </el-dialog> -->
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
      // formLabelWidth: '',
      // forml: { password: '', npassword: '', qpsaaword: '' },
      // dialogFormVisible1: false,
      // cname: localStorage.getItem('name')
      // password: '',
      // npassword: '',
      // qpassword: ''

    }
  },
  // mounted() {
  //   this.getlist()
  // },
  methods: {
    testfunction(a) {
      alert(a)
    }

    // xiugai() {
    //   if (this.password === localStorage.getItem('psaaword')) {
    //     if (this.npassword === this.qpassword) {
    //       this.$http.post('/api/users', { name: this.cname, password: this.npassword }).then(res => {
    //         if (res.data.data === true) {
    //           alert('修改成功')
    //           localStorage.setItem('password', this.form.npassword)
    //           this.password = ''
    //           this.npassword = ''
    //           this.qpassword = ''
    //           this.dialogFormVisible1 = false
    //         } else {
    //           alert(' 修改失败')
    //         }
    //       })
    //     } else {
    //       alert('两次密码不一致')
    //     }
    //   } else {
    //     alert('原密码错误')
    //   }
    // }

  }

}
</script>
<style  scoped>

</style>
