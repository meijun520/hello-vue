<template>
  <div>
    <!-- <ul>
      <li v-for="(item,key) in list" :key="key">
        活动名称：{{ item.name }}活动区域：{{ item.leg }}
      </li>
    </ul> -->
    <template>
      <el-table
        :data="list"
        border
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="活动名称"
        />
        <el-table-column
          prop="leg"
          label="活动区域"
        />
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="danger" @click="deleteItem(scope.$index)">
              删除
            </el-button>
            <el-button @click="openEdit(scope.$index,scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-button type="text" @click="dialogFormVisible = true">
      添加
    </el-button>

    <el-dialog title=" 新闻" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-input v-model="form.leg" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary" @click="shabi">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      dialogFormVisible: false,
      form: { name: '', leg: '' },
      formLabelWidth: '',
      // editAPI: '/api/list/edit',
      // method: 'post',
      // params: {
      //   id, name, leg
      // },
      list: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      this.$http.get('/api/list').then(res => {
        console.log(res)
        this.list = res.data.data
      })
    },
    shabi() {
      this.$http.post('/api/list/edit', { id: this.form.id, name: this.form.name, leg: this.form.leg }).then(res => {
        this.dialogFormVisible = false
        this.form = { name: '', leg: '' }
        this.getlist()
      })
    },
    openEdit(id, item) {
      const form = {
        name: item.name,
        id: id,
        leg: item.leg
      }
      this.dialogFormVisible = true
      this.form = form
      // this.dialogFormVisible = true
      // this.form = { name: item.name, leg: item.leg }
    },
    deleteItem(id) {
      console.log(id)
      // url:'/api/list/delete'
      // param:id
      this.$http.post('/api/list/delete', { id: id }).then(res => {
        this.getlist()
      })
    }

  }

}
</script>

<style >

</style>
