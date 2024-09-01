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
    const role = ref('NormalUser')
    //Store usernames and passwords
    const ruleForm = reactive({
        userName: '',
        password: '',
        confirmpassword: ''
    })

    const tableData = ref([])
    JSON.parse(localStorage.getItem('user')).forEach(item => {
        tableData.value.push({role: 'NormalUser', name: item.name, password: item.password})
    })
    JSON.parse(localStorage.getItem('admin')).forEach(item => {
        tableData.value.push({role: 'Administrator', name: item.name, password: item.password})
    })
    const verify = () => {
        if(ruleForm.userName.length > 10){
            ElMessage('Username cannot exceed 10 characters!')
            return false
        }
        if(ruleForm.password.length > 16 || ruleForm.password.length < 6){
            ElMessage('The password length must be between 6 and 16 characters!')
            return false
        }
        if(ruleForm.password !== ruleForm.confirmpassword){
            ElMessage('Confirm password must be consistent with password!')
            return false
        }
        return true
    }
    const reg = () => {
        if(verify()){
            if(role.value == 'NormalUser'){
                let user = JSON.parse(localStorage.getItem('user'))
                user.push({name: ruleForm.userName, password: ruleForm.password})
                localStorage.setItem('user', JSON.stringify(user))
                ElMessage({
                    message: 'Successful registration!',
                    type: 'success',
                })
                setTimeout(() => {
                    router.push('/login')
                }, 1000)
            }else if(role.value == 'Administrator'){
                let user = JSON.parse(localStorage.getItem('admin'))
                user.push({name: ruleForm.userName, password: ruleForm.password})
                localStorage.setItem('admin', JSON.stringify(user))
                ElMessage({
                    message: 'Successful registration!',
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
            <div class="Login-title">Register</div>
            <div class="mb-2 ml-4">
                <el-radio-group v-model="role">
                    <el-radio value="NormalUser" size="large">User</el-radio>
                    <el-radio value="Administrator" size="large">Administrator</el-radio>
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
                    <el-form-item label="Username" prop="userName">
                        <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input
                            v-model="ruleForm.password"
                            type="password"
                            autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="password">
                        <el-input
                            v-model="ruleForm.confirmpassword"
                            type="password"
                            autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :plain="true" style="margin-left: 30px;" @click="reg">
                            Register
                        </el-button>
                        <div class="reg"><a href="" @click="router.push('/login')">Back to Login</a></div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="tables">
            <el-table :data="tableData" stripe style="width: 50%" class="table">
                <el-table-column prop="role" label="User Type" width="180" />
                <el-table-column prop="name" label="User" width="180" />
                <el-table-column prop="password" label="Password" />
            </el-table>
        </div>
    </div>
</template>

<style scoped>
    .tables{
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .table{
        width: 50vw;
        box-shadow: 10px 10px 20px 0 rgb(122, 128, 129);
    }

    /* 调整 .wrapper 样式，使其背景透明，类似于登录页面 */
    .wrapper {
        position: relative;
        width: 50%;
        margin: 5vh auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.5); /* 半透明边框 */
        background-color: rgba(255, 255, 255, 0.3); /* 半透明背景色 */
        box-shadow: 10px 10px 20px 0 rgba(122, 128, 129, 0.5); /* 半透明阴影 */
        background-color: rgba(255, 255, 255, 0.5); /* 使背景半透明 */
    }

    @media all and (max-width: 992px) {
        .wrapper {
            width: 50%;
            margin: 5vh auto;
        }
    }

    @media all and (min-width: 992px) {
        .wrapper {
            width: 30%;
            margin: 5vh auto;
        }
    }

    @media all and (max-width: 768px) {
        .wrapper {
            width: 75%;
            margin: 5vh auto;
        }
    }

    .Login-title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
        color: white; /* 使标题文字为白色 */
        font-weight: bold; /* 使标题加粗 */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
    }

    .Login-window {
        width: 80%;
    }

    .outer {
        width: 100vw;
        height: 100vh;
        background: url(../images/image7.jpg) no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
    }     
    .reg {
        margin-left: 3vw;
    }

    a {
        text-decoration: none;
    }
</style>
