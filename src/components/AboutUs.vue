<script setup>

</script>

<template>
    <div class="wrapper">
        <div class="images">
            <div class="image">
                <img src="../assets/img.webp" alt="">
            </div>
            <div class="text">XXXXXX</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    padding: 0 10%;
}
.images{
    display: flex;
    width: 90%;
    margin: 0 auto;
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
}
</style>