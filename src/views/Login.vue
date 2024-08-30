<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import { ElMessage } from 'element-plus'
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const role = ref('普通用户')
    //登录成功时的气泡显示函数
    const success = () => {
        ElMessage({
            message: '登陆成功！',
            type: 'success',
        })
    }

    //登录失败时气泡显示函数
    const error = () => {
        ElMessage.error('用户名或密码错误！')
    }

    //储存用户名和密码的容器
    const ruleForm = reactive({
        userName: '',
        password: '',
    })

    // 用户登录函数
    const login = async () => {
        if(role.value == '普通用户'){
            let user = JSON.parse(localStorage.getItem('user'))
            let USER = user.filter(item => item.name == ruleForm.userName && item.password == ruleForm.password)
            if(USER[0]){
                success()
                localStorage.setItem('token', ruleForm.userName)
                setTimeout(() => {
                    router.push('/mainuser')
                }, 1000)
            }else{
                error()
            }
        }else if(role.value == '管理员'){
            let user = JSON.parse(localStorage.getItem('admin'))
            let USER = user.filter(item => item.name == ruleForm.userName && item.password == ruleForm.password)
            if(USER[0]){
                success()
                localStorage.setItem('token', ruleForm.userName)
                setTimeout(() => {
                    router.push('/mainadmin')
                }, 1000)
            }else{
                error()
            }
        }
    }

</script>

<template>
    <div class="outer">
        <div class="wrapper">
            <div class="Login-title">登录</div>
            <div class="mb-2 ml-4">
                <el-radio-group v-model="role">
                <el-radio value="普通用户" size="large">普通用户</el-radio>
                <el-radio value="管理员" size="large">管理员</el-radio>
                </el-radio-group>
            </div>  
            <div class="Login-window">
                <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="ruleForm"
                status-icon
                label-width="auto"
                class="demo-ruleForm"
                >
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                        v-model="ruleForm.password"
                        type="password"
                        autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :plain="true" @click="login" style="margin-left: 30px;">
                            登录
                        </el-button>
                        <div class="reg"><a href="" @click="router.push('/reg')">注册</a></div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        position: relative;
        width: 25%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        box-shadow: 10px 10px 20px 0 rgb(122, 128, 129);
        margin-top: 30px;
        background-color: #fff;
    }
    .Login-title{
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .Login-window{
        width: 80%;
    }
    .Login-reg{
        margin-bottom: 20px;
    }
    .outer{
        width: 100vw;
        height: 100vh;
        background: url(../images/background.webp) no-repeat;
        background-size: cover;
        display: flex;
    }   
    .reg{
        margin-left: 3vw;
    }
    a{
        text-decoration: none;
    }
</style>