<template>
  <div>
    <div v-if="entry">
      <el-form status-icon label-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="name" type="text" auto-complete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="password" type="password" auto-complete="off" />
        </el-form-item>
        <el-form-item>
          <el-button @click="login()">
            登陆
          </el-button>
          <el-button @click="zhu()">
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <el-form status-icon label-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="name" type="text" auto-complete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="password" type="password" auto-complete="off" />
        </el-form-item>
        <el-form-item label="重复密码" prop="repeat">
          <el-input v-model="repeat" type="password" auto-complete="off" />
        </el-form-item>
        <el-form-item>
          <el-button @click="quxiao()">
            取消
          </el-button>
          <el-button @click="zhuce()">
            确定
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
      name: '',
      password: '',
      repeat: '',
      entry: true
    }
  },
  methods: {
    zhu() { this.entry = false },
    zhuce() {
      if (this.password === this.repeat) {
        this.$http.post('/api/users', { name: this.name, password: this.password }).then(res => {
          if (res.data.data === true) {
            alert('注册成功')
            this.name = ''
            this.password = ''
            this.repeat = ''
            this.entry = true
          } else {
            alert('注册失败')
          }
        })
      } else {
        alert('两次密码不一致')
      }
    },
    quxiao() {
      this.entry = true
    },
    login() {
      this.$http.post('/api/login', { name: this.name, password: this.password }).then(res => {
        if (res.data.data === true) {
          localStorage.setItem('name', this.name)
          localStorage.setItem('psaaword', this.psaaword)
          this.name = ''
          this.password = ''
          this.$router.push('/main')
        } else { alert('登陆失败') }
      })
    }
  }

}
</script>
