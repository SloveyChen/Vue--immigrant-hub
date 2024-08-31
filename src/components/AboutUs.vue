<script setup>

</script>

<template>
    <div class="wrapper">
        <div class="images">
            <div class="image">
                <img src="../assets/img.webp" alt="">
            </div>
            <div class="text">Follow us to get more immigration advice</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    padding: 20px 10%;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.images{
    display: flex;
    width: 90%;
    margin: 20px auto;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image{
    flex: 2;
}

img{
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
}

img:hover{
    transform: scale(1.05);
}

.text{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    text-align: center;
    transition: background-color 0.3s ease;
}

.text:hover{
    background-color: #e2e6ea;
}

@media (max-width: 768px) {
    .text{
        font-size: 3vw;
    }
}
</style>
