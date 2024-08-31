<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import { ElMessage } from 'element-plus'
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const role = ref('NormalUser')
    //Tips for successful login
    const success = () => {
        ElMessage({
            message: 'Login successful!',
            type: 'success',
        })
    }

    //Tips for fail login
    const error = () => {
        ElMessage.error('Wrong username or password!')
    }

    //Storeusernames and passwords
    const ruleForm = reactive({
        userName: '',
        password: '',
    })

    // user login
    const login = async () => {
        if(role.value == 'NormalUser'){
            let user = JSON.parse(localStorage.getItem('user'))
            let USER = user.filter(item => item.name == ruleForm.userName && item.password == ruleForm.password)
            if(USER[0]){
                success()
                localStorage.setItem('token', ruleForm.userName)
                setTimeout(() => {
                    router.push('/mainpageuser')
                }, 1000)
            }else{
                error()
            }
        }else if(role.value == 'Administrator'){
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
            <div class="Login-title">Login</div>
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
                    <el-form-item>
                        <el-button type="primary" :plain="true" @click="login" style="margin-left: 30px;">
                        Login
                        </el-button>
                        <div class="reg"><a href="" @click="router.push('/reg')">Register</a></div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <!-- <el-descriptions title="用户信息" class="ref" column="1">
            <el-descriptions-item label="用户名">{{ ruleForm.userName }}</el-descriptions-item>
            <el-descriptions-item label="密码">{{ ruleForm.password }}</el-descriptions-item>
        </el-descriptions> -->
    </div>
</template>

<style scoped>
    @media all and (max-width: 992px) {
        .wrapper{
            position: relative;
            width: 50%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ccc;
            box-shadow: 10px 10px 20px 0 rgb(122, 128, 129);
            margin-top: 30px;
            background-color: #fff;
        }
        .ref{
            width: 50%;
            margin: 5vh auto;
        }
    }
    @media all and (min-width: 992px) {
        .wrapper{
            position: relative;
            width: 30%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ccc;
            box-shadow: 10px 10px 20px 0 rgb(122, 128, 129);
            margin-top: 30px;
            background-color: #fff;
        }
        .ref{
            width: 30%;
            margin: 5vh auto;
        }
    }
    @media all and (max-width: 768px) {
        .wrapper{
            position: relative;
            width: 75%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ccc;
            box-shadow: 10px 10px 20px 0 rgb(122, 128, 129);
            margin-top: 30px;
            background-color: #fff;
        }
        .ref{
            width: 75%;
            margin: 5vh auto;
        }
    }
    /* .wrapper{
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
    } */
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
        flex-direction: column;
    }   
    .reg{
        margin-left: 3vw;
    }
    a{
        text-decoration: none;
    }
</style>