<script setup>
</script>

<template>
    <div class="wrapper">
        Find happiness and friends here!
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    padding: 20px 2%;  /* 增加内边距 */
    font-size: 2.5vw;
    text-align: center;  /* 文本居中 */
    color: #fff;  /* 白色字体 */
    background: linear-gradient(135deg, #1e90ff, #ff7f50); /* 背景渐变色 */
    border-radius: 15px; /* 圆角边框 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加阴影效果 */
    transition: transform 0.3s ease; /* 增加过渡效果 */
    cursor: pointer; /* 鼠标悬停显示手型 */
}

.wrapper:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
}
</style>
