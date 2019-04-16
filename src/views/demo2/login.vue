<template>
  <div>
    <div v-if="!isreg" action="">
      <!-- 用户名:<input v-model="name" type="text">
      密码:<input v-model="password" type="password">
      <button @click="login()">
        登陆
      </button>
      <button @click="reg()">
        注册
      </button> -->

      <el-form :model="ruleForm2" status-icon label-width="100px" style="width:300px;margin:0 auto;">
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">
            登陆
          </el-button>
          <el-button @click="reg()">
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--
      用户名:<input v-model="name" type="text">
      密码:<input v-model="password" type="password">
      再次输入密码： <input v-model="repeat" type="password">
      <button @click=" adduser()">
        确定
      </button>
      <button @click="cancel()">
        取消
      </button> -->
    <div v-else action="">
      <el-form :model="ruleForm2" status-icon label-width="100px" style="width:300px;margin:0 auto;">
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label=" 再次输入密码:" prop="password">
          <el-input v-model="repeat " type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click=" adduser()">
            确定
          </el-button>
          <el-button @click="cancel()">
            取消
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      isreg: false,
      name: '',
      ruleForm2: {},
      password: '',
      repeat: ''
    }
  },
  methods: {
    login() {
      // const api = '/api/login'
      // console.log(api)
      this.$http.post('/api/login', { name: this.name, password: this.password }).then(res => {
        if (res.data.data === true) {
          localStorage.setItem('name', this.name)
          localStorage.setItem('password', this.password)
          this.name = ''
          this.password = ''
          this.$router.push('/li2/list')
        } else {
          alert('登陆失败')
        }
      })
    },
    reg() {
      this.isreg = true
    },
    cancel() {
      this.isreg = false
    },
    adduser() {
      if (this.password === this.repeat) {
        this.$http.post('/api/users', { name: this.name, password: this.password }).then(res => {
          if (res.data.data === true) {
            alert('注册成功')
            this.name = ''
            this.password = ''
            this.repeat = ''
            this.isreg = false
          } else {
            alert('注册失败')
          }
        })
      } else {
        alert('两次密码不一致')
      }
    }

  }

}
</script>

<style >

</style>
