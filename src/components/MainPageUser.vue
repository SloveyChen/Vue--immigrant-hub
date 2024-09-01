<script setup>
</script>

<template>
    <div class="wrapper">
        <div class="image-container">
            <div class="image-item">
                <img src="../assets/image11.jpg" alt="Image 1" class="carousel-image" />
            </div>
            <div class="image-item">
                <img src="../assets/22.jpg" alt="Image 2" class="carousel-image" />
            </div>
            <div class="image-item">
                <img src="../assets/image00.jpg" alt="Image 3" class="carousel-image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: 100vh; 
    background: url('../assets/background-image.jpg') no-repeat center center;
    background-size: 100%; 
    margin: 0; 
    padding: 0;
    padding-top: 70px; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vw;
    color: #fff;
    padding-top: 58%;
}

.image-container {
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 5px; 
    width: 80vw;
}

.carousel-image {
    width: 100%;  
    object-fit: cover; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.footer-text {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5vw;
    color: #333;
}
</style>
