<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const router = useRouter();
const activeIndex2 = ref("1");
const verify = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
    ElMessage("Please login!");
  }
};
const logout = () => {
  localStorage.removeItem("token");
  ElMessage({
    message: "Quit Success!",
    type: "success",
  });
  router.push("/login");
};
verify();

const isFontLarge = ref(false);

const toggleFontSize = () => {
  isFontLarge.value = !isFontLarge.value;
  if (isFontLarge.value) {
    document.documentElement.style.setProperty("font-size", "20px");
    document.documentElement.style.setProperty("--font-size-multiplier", "1.1");
    document.documentElement.style.setProperty("--el-font-size-base", "24px");
    document.body.classList.add("large-font");
  } else {
    document.documentElement.style.setProperty("font-size", "16px");
    document.documentElement.style.setProperty("--font-size-multiplier", "1");
    document.documentElement.style.removeProperty("--el-font-size-base");
    document.body.classList.remove("large-font");
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        style="padding: 0 10%"
        mode="horizontal"
        background-color="#6A5ACD"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          index="1"
          @click="router.push('/mainpageuser')"
          class="menu-item"
          >Home page</el-menu-item
        >
        <el-menu-item
          index="2"
          @click="router.push('/activity')"
          class="menu-item"
          >Activity</el-menu-item
        >
        <el-menu-item
          index="3"
          @click="router.push('/aboutus')"
          class="menu-item"
          >About us</el-menu-item
        >
        <el-menu-item index="4" class="menu-item">News</el-menu-item>
        <el-menu-item index="5" @click="router.push('/life')"
          >Life Navigation</el-menu-item
        >
        <el-menu-item index="6" class="menu-item">Group</el-menu-item>
        <el-menu-item index="7" class="menu-item"
          >Psychological Clinic</el-menu-item
        >

        <div class="user-actions">
          <div
            @click="logout"
            style="color: #fff; font-weight: bold; font-size: 24px"
          >
            Logout
          </div>
        </div>
      </el-menu>
      <div class="font-size-toggle" @click="toggleFontSize">Toggle</div>
    </div>
    <div class="component">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  padding-bottom: 5vh;
}
.nav {
  width: 100%;
  position: relative;
}

.menu-item {
  font-size: 18px;
}

.username {
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.username:hover {
  color: rgb(83, 96, 106);
}

.component {
  width: 100%;
  padding-bottom: 5vh;
}
.banner {
  width: 100%;
  height: 7vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
}
.banner div {
  margin-right: 1vw;
}

.user-actions {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20%;
  display: flex;
  align-items: center;
}

.font-size-toggle {
  position: absolute;
  top: 10px;
  right: 30px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
}
.font-size-toggle:hover {
  color: rgb(83, 96, 106);
}

.username {
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.username:hover {
  color: rgb(83, 96, 106);
}
</style>

<style>
:root {
  --font-size-multiplier: 1;
}

body {
  font-size: 16px;
}

/* 对于使用 em 单位的元素，使用 CSS 变量来控制大小 */
[class*="font-size-"] {
  font-size: calc(var(--font-size-multiplier) * 1em);
}

.large-font {
  font-size: calc(1.2em * var(--font-size-multiplier));
}

.large-font .el-menu-item,
.large-font .el-sub-menu__title {
  font-size: calc(1.2em * var(--font-size-multiplier)) !important;
}

/* ... 其他现有样式 ... */
</style>
