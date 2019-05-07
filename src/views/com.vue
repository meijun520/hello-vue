<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="搜索">
        <el-input v-model="formInline" placeholder="关键字 " />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="get()">
          确认
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="name"
        label="活动名称"
        width="300"
      />
      <el-table-column
        prop="data"
        label="活动区域"
        width="300"
      />
      <el-table-column
        label="操作"
        width="300"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="shanchu(scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="text" @click="dialogFormVisible = true">
      添加
    </el-button>

    <el-dialog title="新闻" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="form.data" auto-complete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary" @click="tinjia()">
          确 定
        </el-button>
      </div>
    </el-dialog>
    <list-delete :center-dialog-visible="visible" tishi="提示" neirong="确认要删除？" @qdelete="handleDelete()" @quxiao="quren()" />
  </div>
</template>
<script>
import listDelete from './listdelete'
export default {
  name: 'NewList',
  components: {
    listDelete: listDelete
  },
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      visible: false,
      form: {
        name: '',
        data: ''
      },
      bianhao: '',
      formInline: ''

    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      this.$http.get('/api/list', { params: { keyword: this.formInline }}).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    tinjia() {
      if (this.form.id === undefined) {
        this.$http.post('/api/list', this.form).then(res => {
          this.dialogFormVisible = false
          this.form = { name: '', data: '' }
          this.formInline = ''
          this.getlist()
        })
      } else {
        this.$http.post('/api/list/edit', { id: this.form.id, name: this.form.name, data: this.form.data }).then(res => {
          this.dialogFormVisible = false
          this.form = { name: '', data: '' }
          this.formInline = ''
          this.getlist()
        })
      }
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.form.name = row.name
      this.form.data = row.data
      this.form.id = index
      this.$emit('mmmsss', this.id)
    },
    shanchu(index) {
      this.bianhao = index
      this.visible = true
    },
    handleDelete(bianhao) {
      this.$http.post('/api/list/delete', { id: this.bianhao }).then(res => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.getlist()
      })
      this.visible = false
    },
    quren() {
      this.visible = false
    },
    get() {
      this.$http.get('/api/list', { params: { keyword: this.formInline }}).then(res => {
        this.getlist()
      })
    }

  }
}
</script>
