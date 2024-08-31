<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value = ref(0)
const result = () => {
    ElMessage({
        message: '评分成功！评分为' + value.value + '分！',
        type: 'success',
    })
}
</script>

<template>
    <div class="wrapper">
        <el-rate v-model="value" allow-half size="large" @change="result" />
        <div class="TEXT">
            进行评分吧！
        </div>
        <div class="images">
            <div class="image">
                <img src="../assets/image2.jpg" alt="">
            </div>
            <div class="text">活动1：XXXXXXXX</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    padding: 0 10%;
}
.TEXT{
    font-size: 2.5vw;
}
.images{
    display: flex;
    width: 85%;
    margin: 5vh auto;
}
.image{
    flex: 2;
}
img{
    width: 100%;
}
.text{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vw;
    margin-left: 1vw;
}
</style>