<script setup>
</script>

<template>
    <div class="wrapper">
        Find happiness and friends here!
    </div>


    <el-carousel height="500px" indicator-position="outside">
        <el-carousel-item>
            <img src="../assets/image3.jpg" alt="Immigration Consulting" class="carousel-image"/>
        </el-carousel-item>
        
        <el-carousel-item>
            <img src="../assets/image4.jpg" alt="Make friends" class="carousel-image"/>
        </el-carousel-item>
       
        <el-carousel-item>
            <img src="../assets/img5.jpg" alt="Psychological Counseling" class="carousel-image"/>
        </el-carousel-item>
    </el-carousel>

    <div class="wrapper">
        Here, expand your opportunities to go global!
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    padding: 20px 2%;
    font-size: 2.5vw;
    text-align: center;
    color: #fff;
    background: linear-gradient(135deg, #1e90ff, #ff7f50);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    cursor: pointer;
    margin-bottom: 20px; /* 增加下方空隙 */
}

.wrapper:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
}

.carousel-image {
    width: 100%;
    height: 500px; 
    object-fit: cover;
    border-radius: 10px;
}

.footer-text {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5vw;
    color: #333;
}
</style>
