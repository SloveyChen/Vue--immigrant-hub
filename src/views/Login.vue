<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter()
const role = ref('NormalUser')

// Tips for successful login
const success = () => {
    ElMessage({
        message: 'Login successful!',
        type: 'success',
    })
}

// Tips for fail login
const error = () => {
    ElMessage.error('Wrong username or password!')
}

// Store usernames and passwords
const ruleForm = reactive({
    userName: '',
    password: '',
})

// User login
const login = async () => {
    if (role.value == 'NormalUser') {
        let user = JSON.parse(localStorage.getItem('user'))
        let USER = user.filter(item => item.name == ruleForm.userName && item.password == ruleForm.password)
        if (USER[0]) {
            success()
            localStorage.setItem('token', ruleForm.userName)
            setTimeout(() => {
                router.push('/mainpageuser')
            }, 1000)
        } else {
            error()
        }
    } else if (role.value == 'Administrator') {
        let user = JSON.parse(localStorage.getItem('admin'))
        let USER = user.filter(item => item.name == ruleForm.userName && item.password == ruleForm.password)
        if (USER[0]) {
            success()
            localStorage.setItem('token', ruleForm.userName)
            setTimeout(() => {
                router.push('/mainadmin')
            }, 1000)
        } else {
            error()
        }
    }
}
</script>

<template>
    <div class="outer">
        <div class="welcome-message">Welcome to Horizon Hub</div>

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
                    <!-- add Facebook and Google buttom -->
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-facebook" class="facebook-btn">
                            Continue with Facebook
                        </el-button>
                        <el-button type="danger" icon="el-icon-google" class="google-btn">
                            Continue with Google
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* add welcome style */
    .welcome-message {
        font-size: 36px;
        font-weight: bold;
        color: white;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* add the table style */
    .wrapper {
        position: relative;
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.5); /* 半透明边框 */
        background-color: rgba(255, 255, 255, 0.3); /* 半透明背景色 */
        box-shadow: 10px 10px 20px 0 rgba(122, 128, 129, 0.5); /* 半透明阴影 */
        margin-top: 30px;
        background-color: rgba(255, 255, 255, 0.5); /* 使背景半透明 */
    }

    /* Facebook and Google style*/
    .facebook-btn {
        background-color: #3b5998; /* Facebook 蓝色 */
        color: white;
        margin-right: 10px;
    }

    .google-btn {
        background-color: #db4437; /* Google 红色 */
        color: white;
    }

    .facebook-btn:hover, .google-btn:hover {
        opacity: 0.9; 
    }

    .Login-title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
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
        align-items: center; 
        justify-content: center; 
    }

    .reg {
        margin-left: 3vw;
    }

    a {
        text-decoration: none;
    }
</style>
