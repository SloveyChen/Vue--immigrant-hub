<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { ElMessage } from 'element-plus'
    const router = useRouter()
    if(!localStorage.getItem('user')){
        localStorage.setItem('user', '[]')   
    }
    if(!localStorage.getItem('admin')){
        localStorage.setItem('admin', '[]')
    }
    const role = ref('普通用户')
    //储存用户名和密码的容器
    const ruleForm = reactive({
        userName: '',
        password: '',
        confirmpassword: ''
    })

    const verify = () => {
        if(ruleForm.userName.length > 20){
            ElMessage('用户名不能超过20字！')
            return false
        }
        if(ruleForm.password.length > 16 || ruleForm.password.length < 6){
            ElMessage('密码长度要在6到16字之间！')
            return false
        }
        if(ruleForm.password !== ruleForm.confirmpassword){
            ElMessage('确认密码要与密码一致！')
            return false
        }
        return true
    }
    const reg = () => {
        if(verify()){
            if(role.value == '普通用户'){
                let user = JSON.parse(localStorage.getItem('user'))
                user.push({name: ruleForm.userName, password: ruleForm.password})
                localStorage.setItem('user', JSON.stringify(user))
                ElMessage({
                    message: '注册成功！',
                    type: 'success',
                })
                setTimeout(() => {
                    router.push('/login')
                }, 1000)
            }else if(role.value == '管理员'){
                let user = JSON.parse(localStorage.getItem('admin'))
                user.push({name: ruleForm.userName, password: ruleForm.password})
                localStorage.setItem('admin', JSON.stringify(user))
                ElMessage({
                    message: '注册成功！',
                    type: 'success',
                })
                setTimeout(() => {
                    router.push('/login')
                }, 1000)
            }
        }
    }
</script>

<template>
    <div class="outer">
        <div class="wrapper">
            <div class="Login-title">注册</div>
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
                        v-model="ruleForm.confirmpassword"
                        type="password"
                        autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password">
                        <el-input
                        v-model="ruleForm.password"
                        type="password"
                        autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :plain="true" style="margin-left: 30px;" @click="reg">
                            注册
                        </el-button>
                        <div class="reg"><a href="" @click="router.push('/login')">返回登录</a></div>
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