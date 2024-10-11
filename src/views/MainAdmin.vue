<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import UserTable from "./UserTable.vue";
const router = useRouter()
const activeIndex2 = ref('1')
const verify = () => {
    let token = localStorage.getItem('token')
    if(!token){
        router.push('/login')
        ElMessage('Please login')
    }
}
const logout = () => {
    localStorage.removeItem('token')
    ElMessage({
            message: 'Exit Success!',
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
                <el-menu-item index="1" @click="router.push('/mainadmin')">Home Page</el-menu-item>
                <div class="username" @click="logout">Quit login</div>
            </el-menu>
        </div>
        <div class="component">
            <!-- <router-view></router-view> -->
            Welcome administrator login!
          <user-table></user-table>
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
    text-align: center;
    padding-top: 5vh;
    font-size: 2.5vw;
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
