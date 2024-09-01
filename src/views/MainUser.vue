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
        ElMessage('Please login!')
    }
}
const logout = () => {
    localStorage.removeItem('token')
    ElMessage({
            message: 'Quit Success!',
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
                background-color="#6A5ACD"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1" @click="router.push('/mainpageuser')" class="menu-item">Home page</el-menu-item>
                <el-menu-item index="2" @click="router.push('/activity')" class="menu-item">Activity</el-menu-item>
                <el-menu-item index="3" @click="router.push('/aboutus')" class="menu-item">About us</el-menu-item>
                <el-menu-item index="4" class="menu-item">News</el-menu-item>
                <el-menu-item index="5" class="menu-item">Life Navigation</el-menu-item>
                <el-menu-item index="6" class="menu-item">Group</el-menu-item>
                <el-menu-item index="7" class="menu-item">Psychological Clinic</el-menu-item>

                <div class="username" @click="logout">Logout</div>
            </el-menu>
        </div>
        <div class="component">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100vw;
    padding-bottom: 5vh;
}
.nav{
    width: 100%;
}

.menu-item {
    font-size: 18px; 
}

.username{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20%;
    color: white;
    font-size: 18px; 
    font-weight: bold;
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
