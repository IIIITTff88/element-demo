<template>
  <div id="main">
    <div class="content">
      <div class="title">
        <el-row :span="24">
          <el-col :span="24">
            <h1>圣诞节烦死了放假了</h1>
          </el-col>
        </el-row>
      </div>
      <div class="login-content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        userName: '',
        pwd: ''
      },
      rules: {
        userName: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (this.ruleForm.userName === 'admin' || this.ruleForm.pwd === '123') {
          this.$router.push('/test1-1')
        } else {
          this.$message({
            type: 'error',
            message: '用户名或者密码错误'
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
  #main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url("../assets/images/2.jpeg") no-repeat;
    background-size: 100% 100%;
    .content {
      position: relative;
      margin-top: 20vh;
      width: 400px;
      margin:300px auto;
      text-align: center;
      h1 {
        font-size: 40px;
      }
      .login-content {
        margin-top: 30px;
        /*width: 300px;*/
        /*margin: auto;*/
      }
    }
  }

</style>
