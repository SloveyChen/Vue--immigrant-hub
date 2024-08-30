<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const router = useRouter()
const activeIndex2 = ref('1')
const verify = () => {
    let token = localStorage.getItem('token')
    if(!token){
        router.push('/login')
        ElMessage('请登录！')
    }
}
const logout = () => {
    localStorage.removeItem('token')
    ElMessage({
            message: '退出成功！',
            type: 'success',
        })
    router.push('/login')
}
verify()
</script>

<template>
    <div class="wrapper">
        <div class="nav">
            <el-menu
            :default-active="activeIndex2"
                class="el-menu-demo"
                style="padding: 0 10%;"
                mode="horizontal"
                background-color="#409EFF"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1" @click="router.push('/main')">首页</el-menu-item>
                <el-menu-item index="2">活动页</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
                <el-menu-item index="4">新闻</el-menu-item>
                <el-menu-item index="5">生活导航</el-menu-item>
                <el-menu-item index="6">小组</el-menu-item>
                <el-menu-item index="7">心理诊所</el-menu-item>
                <!-- <el-menu-item index="4" @click="router.push('/order')">订单管理</el-menu-item> -->
                <div class="username" @click="logout">退出</div>
            </el-menu>
        </div>
        <div class="component">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
.wrapper{
    width: 100vw;
    padding-bottom: 5vh;
}
.nav{
    width: 100%;
}
.username{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20%;
    color: white;
    font-size: 16;
    font-weight: 550;
    cursor: pointer;
}
.username:hover{
    color: rgb(83, 96, 106);
}

.component{
    width: 100%;
    padding-bottom: 5vh;
}
.banner{
    width: 100%;
    height: 7vh;
    padding: 0 10%;
    display: flex;
    align-items: center;
}
.banner div{
    margin-right: 1vw;
}
</style>