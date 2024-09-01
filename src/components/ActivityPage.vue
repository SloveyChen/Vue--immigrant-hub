<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value1 = ref(0)
const value2 = ref(0)
const totalRating = ref(0)
const ratingsCount = ref(0)

const updateTotalRating = () => {
    totalRating.value = value1.value + value2.value
    ratingsCount.value = 2 // 此处为两个评分活动，如果有更多活动，可以相应调整
}

const result = () => {
    ElMessage({
        message: 'Rating successful! The score is ' + (value1.value + value2.value) / 2 + ' points!',
        type: 'success',
    })
    updateTotalRating()
}
</script>

<template>
    <div class="wrapper">
        <el-rate v-model="value1" allow-half size="large" @change="result" />
        <div class="TEXT">
            Please rate Activity 1!
        </div>
        <div class="images">
            <div class="image">
                <img src="../assets/dataing.jpg" alt="Activity 1">
            </div>
            <div class="text">Activity 1: Dating Forum</div>
        </div>
    </div>

    <div class="wrapper">
        <el-rate v-model="value2" allow-half size="large" @change="result" />
        <div class="TEXT">
            Please rate Activity 2!
        </div>
        <div class="images">
            <div class="image">
                <img src="../assets/sport.jpg" alt="Activity 2">
            </div>
            <div class="text">Activity 2: Sport Day</div>
        </div>
    </div>

    <div class="summary">
        <div class="TEXT">
            Total Rating: {{ totalRating.value }} points / {{ ratingsCount.value * 5 }} points
        </div>
        <div class="TEXT">
            Average Rating: {{ (totalRating.value / ratingsCount.value).toFixed(2) }} points
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    padding: 20px 10%;
    margin-bottom: 40px; 
    background: linear-gradient(135deg, #e6e6fa, #d8bfd8); 
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

/* 新增的汇总部分样式 */
.summary {
    margin: 20px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>

