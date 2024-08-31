<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value = ref(0)
const result = () => {
    ElMessage({
        message: 'Rating successful! The score is ' + value.value + ' point!',
        type: 'success',
    })
}
</script>

<template>
    <div class="wrapper">
        <el-rate v-model="value" allow-half size="large" @change="result" />
        <div class="TEXT">
            Please rate!
        </div>
        <div class="images">
            <div class="image">
                <img src="../assets/dataing.jpg" alt="Activity 1">
            </div>
            <div class="text">Activity 1: Dating Forum</div>
        </div>
    </div>

    <div class="wrapper">
        <el-rate v-model="value" allow-half size="large" @change="result" />
        <div class="TEXT">
            Please rate!
        </div>
        <div class="images">
            <div class="image">
                <img src="../assets/sport.jpg" alt="Activity 2">
            </div>
            <div class="text">Activity 2: Sport Day</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    padding: 20px 10%;
    margin-bottom: 40px; 
    background-color: #f9f9f9; 
    border-radius: 15px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease;
}

.wrapper:hover {
    transform: scale(1.02); 
}

.TEXT {
    font-size: 2vw; 
    text-align: center; 
    margin-bottom: 20px; 
}

.images {
    display: flex;
    align-items: center; 
    width: 85%;
    margin: 0 auto; 
}

.image {
    flex: 3; 
    transition: transform 0.3s ease; 
}

.image img {
    width: 100%;
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image img:hover {
    transform: scale(1.05); 
}

.text {
    flex: 2; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw; 
    margin-left: 20px; 
    text-align: center; 
}
</style>
